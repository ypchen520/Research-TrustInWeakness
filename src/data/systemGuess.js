var data = [
    {"photoID":2,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":3,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":7,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":8,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":10,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":11,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":18,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":25,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":27,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":29,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":31,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":38,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":40,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":41,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":53,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":54,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":56,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":60,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":true,"other":false},"food":true,"other":true}},
    {"photoID":62,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":63,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":65,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":false,"other":true},"paper":{"bag":false,"other":false},"food":true,"other":true}},
    {"photoID":70,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":75,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":true},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":77,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":true,"other":false},"food":false,"other":false}},
    {"photoID":81,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":true,"other":true}},
    {"photoID":87,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":88,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":89,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":90,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":true,"other":false}},
    {"photoID":91,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":92,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":true,"other":false}},
    {"photoID":93,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":94,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":96,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":99,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":523,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":true},"paper":{"bag":true,"other":true},"food":false,"other":true}},
    {"photoID":550,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":598,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":true},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":617,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":623,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":637,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":667,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":687,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":695,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":696,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":700,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":701,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":702,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":704,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":true,"other":true}},
    {"photoID":707,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":710,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":713,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":715,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":716,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":718,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":719,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":720,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":721,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":745,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":746,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":true,"other":true}},
    {"photoID":754,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":true,"other":true},"food":false,"other":true}},
    {"photoID":755,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":761,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":763,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":765,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":775,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":780,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":783,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":785,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":805,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":807,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":812,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":816,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":830,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":835,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":836,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":846,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":851,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":853,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":true},"aluminum":{"can":true,"other":true},"paper":{"bag":true,"other":true},"food":false,"other":true}},
    {"photoID":855,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":859,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":860,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":862,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":866,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":884,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":892,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":899,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":901,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":910,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":923,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":true},"paper":{"bag":true,"other":false},"food":false,"other":false}},
    {"photoID":924,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":true,"other":false}},
    {"photoID":936,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":945,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":946,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":948,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":971,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":983,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":true,"other":false},"food":false,"other":true}},
    {"photoID":989,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":990,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":994,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":999,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1001,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1018,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":1028,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1030,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1041,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":true,"other":false},"food":false,"other":false}},
    {"photoID":1042,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1044,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1052,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":true}},
    {"photoID":1055,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1067,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1076,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1079,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":1080,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1082,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":true,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1087,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1094,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1097,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1098,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1112,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1114,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1116,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1122,"label":{"glass":{"unbroken":true,"broken":false},"plastic":{"wrapper":true,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1126,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1141,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1143,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1145,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1149,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1154,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":true},"paper":{"bag":true,"other":false},"food":false,"other":false}},
    {"photoID":1158,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":false}},
    {"photoID":1161,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1168,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1184,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":false,"other":true},"paper":{"bag":false,"other":true},"food":false,"other":false}},
    {"photoID":1241,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":false,"bottle":true,"other":true},"aluminum":{"can":false,"other":true},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1242,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":true,"other":false},"food":false,"other":true}},
    {"photoID":1244,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":true,"bottle":false,"other":false},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1308,"label":{"glass":{"unbroken":false,"broken":true},"plastic":{"wrapper":false,"bottle":false,"other":false},"aluminum":{"can":true,"other":false},"paper":{"bag":false,"other":false},"food":false,"other":true}},
    {"photoID":1400,"label":{"glass":{"unbroken":false,"broken":false},"plastic":{"wrapper":true,"bottle":false,"other":true},"aluminum":{"can":false,"other":false},"paper":{"bag":false,"other":true},"food":false,"other":false}}
    ];
    
    export default data;
    