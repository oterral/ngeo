goog.provide('ngeo.modalDirective');

goog.require('goog.asserts');
goog.require('ngeo');


/**
 * Provides the "ngeoModal" directive.
 *
 * This directive shows a Bootstrap modal when the `ngModel` expression
 * evaluates to `true`, and it hides it when the `ngModel` expression
 * evaluates to `false`.
 *
 * The directives also changes the `ngModel` value when the user manually
 * closes the modal.
 *
 * This directive is based on Bootstrap's `modal` classes and associated
 * jQuery plugin.
 *
 *     <ngeo-modal ng-model="modalShown">
 *       <div class="modal-header">
 *         <button type="button" class="close" data-dismiss="modal"
 *                 aria-hidden="true">&times;</button>
 *         <h4 class="modal-title">The Title</h4>
 *       </div>
 *       <div class="modal-body">Some content</div>
 *     </ngeo-modal>
 *
 * Note: for z-indexing purpose, the modal DOM element is automatically moved
 * to document body element.
 *
 * See our live example: [../examples/modal.html](../examples/modal.html)
 *
 * @param {angular.$parse} $parse Angular parse service.
 * @return {angular.Directive} The directive specs.
 * @htmlAttribute {boolean} ngeo-modal-destroy-content-on-hide Destroy the content
 * when the modal is hidden
 * @ngInject
 * @ngdoc directive
 * @ngname ngeoModal
 */
ngeo.modalDirective = function($parse) {
  return {
    template: '<div class="modal fade" tabindex="-1" role="dialog">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '</div>' +
        '</div>' +
        '</div>',
    restrict: 'E',
    require: 'ngModel',
    transclude: true,
    /**
     * @param {!angular.Scope=} scope Scope.
     * @param {!angular.JQLite=} element Element.
     * @param {!angular.Attributes=} attrs Atttributes.
     * @param {!angular.NgModelController=} ngModelController The ngModel controller.
     * @param {!function(!angular.Scope=, !function(Element)=)=} transcludeFn is a transclude linking
     *      function pre-bound to the correct transclusion scope.
     */
    link(scope, element, attrs, ngModelController, transcludeFn) {
      const modal = element.children();
      const destroyContent = attrs['ngeoModalDestroyContentOnHide'] === 'true';
      let childScope = scope.$new();

      // move the modal to document body to ensure that it is on top of
      // other elements even if in a positioned element initially.
      angular.element(document.body).append(modal);

      ngModelController.$render = function() {
        modal.modal(ngModelController.$viewValue ? 'show' : 'hide');
      };

      modal.on('shown.bs.modal hidden.bs.modal', (e) => {
        const type = e.type;
        goog.asserts.assert(type == 'shown' || type == 'hidden');
        scope.$apply(() => {
          ngModelController.$setViewValue(type == 'shown');
        });
      });

      if (destroyContent) {
        modal.on('hide.bs.modal', onHide);
        modal.on('show.bs.modal', onShow);
      } else {
        modal.find('.modal-content').append(transcludeFn());
      }

      function onShow(e) {
        childScope = scope.$new();
        transcludeFn(childScope, (clone) => {
          modal.find('.modal-content').append(clone);
        });
      }

      function onHide(e) {
        childScope.$destroy();
        modal.find('.modal-content').empty();
      }
    }
  };
};

ngeo.module.directive('ngeoModal', ngeo.modalDirective);
