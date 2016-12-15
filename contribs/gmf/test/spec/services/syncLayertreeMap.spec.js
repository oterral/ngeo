/* global themes capabilities */
goog.require('gmf.SyncLayertreeMap');
goog.require('gmf.test.data.themes');

describe('gmf.SyncLayertreeMap', function() {
  var $httpBackend_;
  var gmfSyncLayertreeMap_;
  var element;
  var map;
  var roottreeCtrl;
  var group;
  var getLayer;

  beforeEach(function() {
    map = new ol.Map({
      view: new ol.View({
        center: [0, 0],
        zoom: 0
      })
    });

    group = new ol.layer.Group();
    map.getLayers().push(group);

    element = angular.element(
      '<div ngeo-layertree="tree"' +
        'ngeo-layertree-map="map"' +
        'ngeo-layertree-nodelayer="getLayer(treeCtrl)"' +
      '</div>'
    );

    inject(function($rootScope, $compile, $httpBackend, gmfSyncLayertreeMap, gmfThemes, gmfTreeUrl) {
      $httpBackend_ = $httpBackend;
      gmfSyncLayertreeMap_ = gmfSyncLayertreeMap;

      var reGmfTreeUrl = new RegExp('^' + gmfTreeUrl);
      // Prepare request simulation
      $httpBackend.when('GET', reGmfTreeUrl).respond(themes);
      $httpBackend.when('GET', 'https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr').respond(capabilities.swisstopo);

      // Prepare themes
      $httpBackend.expectGET(reGmfTreeUrl);
      gmfThemes.loadThemes();
      $httpBackend.flush();

      // Prepare layertree
      getLayer = function(treeCtrl) {
        var layer = gmfSyncLayertreeMap.createLayer(treeCtrl, map, group);
        return layer;
      };
    });
  });

  // ================== miscellaneous ================

  it('Get layer', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[3]; // Theme 'OSM'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
    roottreeCtrl = element.scope().layertreeCtrl;

    var treeGroup = roottreeCtrl.children[1]; // Group 'Layers'
    var treeLayer = treeGroup.children[0]; // Leaf 'cinema'
    var layer = gmf.SyncLayertreeMap.getLayer(treeLayer);

    expect(treeLayer.layer).toBe(null);
    expect(layer.constructor).toBe(ol.layer.Image);
  });

  // ================== Create ================

  it('Create WMS Layer in mixed group', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[3]; // Theme 'OSM'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
    roottreeCtrl = element.scope().layertreeCtrl;
    var treeGroup = roottreeCtrl.children[0]; // Group 'OSM functions mixed'
    var treeLeaf = treeGroup.children[0]; // osm scale;
    var wmsParamLayers = treeLeaf.layer.getSource().getParams()['LAYERS'];

    expect(treeLeaf.node.name).toEqual(wmsParamLayers);
  });

  it('Create WMS Layer in a not mixed group', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[3]; // Theme 'OSM'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
    roottreeCtrl = element.scope().layertreeCtrl;
    var treeGroup = roottreeCtrl.children[1]; // Group 'Layers'
    var wmsParamLayers = treeGroup.layer.getSource().getParams()['LAYERS'];
    var checkedLayers = ['cinema', 'police', 'post_office', 'entertainment',
      'sustenance', 'hospitals']; // order count !

    expect(wmsParamLayers).toEqual(checkedLayers.reverse().join(','));
  });

  it('Create WMTS Layer (in a mixed group)', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[2]; // Theme 'Cadastre'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });

    $httpBackend_.flush(); // To get capabilities (and source) for the WMTS layer.
    roottreeCtrl = element.scope().layertreeCtrl;
    var treeGroup = roottreeCtrl.children[0]; // Group 'Cadastre'
    var treeLeaf = treeGroup.children[4]; // Leaf 'ch.are.alpenkonvention'

    expect(treeLeaf.node.name).toBe(treeLeaf.layer.getSource().getLayer());
  });

  // ================== Sync ================

  it('Sync WMS Layer in mixed group', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[3]; // Theme 'OSM'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
    roottreeCtrl = element.scope().layertreeCtrl;
    var treeGroup = roottreeCtrl.children[0]; // Group 'OSM functions mixed'
    var treeLeaf = treeGroup.children[0]; // osm scale;
    var wmsParamLayers;

    roottreeCtrl.setState('off');
    gmfSyncLayertreeMap_.sync_(map, treeGroup);
    expect(treeLeaf.layer.getVisible()).toBe(false);

    gmfSyncLayertreeMap_.sync_(map, treeGroup);
    treeLeaf.setState('on');
    gmfSyncLayertreeMap_.sync_(map, treeLeaf);
    wmsParamLayers = treeLeaf.layer.getSource().getParams()['LAYERS'];
    expect(wmsParamLayers).toBe('osm_scale');
  });

  it('Sync WMS Layer in a not mixed group', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[3]; // Theme 'OSM'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
    roottreeCtrl = element.scope().layertreeCtrl;
    var treeGroup = roottreeCtrl.children[1]; // Group 'Layers'
    var treeLeaf = treeGroup.children[0]; // Leaf 'cinema'
    var wmsParamLayers;

    roottreeCtrl.setState('off');
    gmfSyncLayertreeMap_.sync_(map, treeGroup);
    expect(treeGroup.layer.getVisible()).toBe(false);

    treeLeaf.setState('on');
    gmfSyncLayertreeMap_.sync_(map, treeLeaf);
    wmsParamLayers = treeGroup.layer.getSource().getParams()['LAYERS'];
    expect(wmsParamLayers).toBe('cinema');

    // Group is on, original order must be kept.
    treeGroup.setState('on');
    gmfSyncLayertreeMap_.sync_(map, treeGroup);
    wmsParamLayers = treeGroup.layer.getSource().getParams()['LAYERS'];
    expect(wmsParamLayers).toEqual('hospitals,sustenance,entertainment,' +
            'osm_time,post_office,police,cinema');
  });

  it('Sync WMTS Layer (in a mixed group)', function() {
    inject(function($rootScope, $compile) {
      // Init, compile layertree
      $rootScope.tree = themes.themes[2]; // Theme 'Cadastre'
      $rootScope.map = map;
      $rootScope.getLayer = getLayer;
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
    $httpBackend_.flush(); // To get capabilities (and source) for the WMTS layer.
    roottreeCtrl = element.scope().layertreeCtrl;
    var treeGroup = roottreeCtrl.children[0]; // Group 'Cadastre'
    var treeLeaf = treeGroup.children[4]; // Leaf 'ch.are.alpenkonvention'

    treeGroup.setState('off');
    gmfSyncLayertreeMap_.sync_(map, treeGroup);
    expect(treeLeaf.layer.getVisible()).toBe(false);

    treeLeaf.setState('on');
    gmfSyncLayertreeMap_.sync_(map, treeLeaf);
    expect(treeLeaf.layer.getVisible()).toBe(true);
  });
});