'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "bd231226795ff0a4d1ae1f7d6318e2d6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "55865fd94df7b81e10de7c5ec967ebc9",
"version.json": "3cc55faac86ca99f718a8492d0243eb7",
"index.html": "b64cdcc6c9f6be55cbed696caae36be1",
"/": "b64cdcc6c9f6be55cbed696caae36be1",
"main.dart.js": "9dca8899fefc29768b012fb75d4bb8ed",
"assets/AssetManifest.json": "ae5fc426b365f2579cd5a81fb296901d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "acdca05477e46def4d5a3d414ea7052b",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "c76341bd37200035d649461093160662",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "6038b2361469644869a723d28544230d",
"assets/packages/hyphenatorx/test/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/packages/hyphenatorx/assets/language_el_polyton.json": "38c019caffe09b4c9555bd4bdac9c1a2",
"assets/packages/hyphenatorx/assets/language_nn.json": "ad703f572cbdc2951ace902f31021c65",
"assets/packages/hyphenatorx/assets/language_tk.json": "460bb1d91f8e41b5c6a5fe5668074dc3",
"assets/packages/hyphenatorx/assets/language_la.json": "a841100589d9500afbd41f9aaac78c19",
"assets/packages/hyphenatorx/assets/language_fi.json": "984fa6c4c8d432224468d3a2e9479ccc",
"assets/packages/hyphenatorx/assets/language_kmr.json": "e6fc99875809b0cd60763dd3cb956547",
"assets/packages/hyphenatorx/assets/language_sl.json": "2e1f16dc4243cfb69147858ad4d9a15b",
"assets/packages/hyphenatorx/assets/language_pt.json": "783fb19ab0b5c6c74900a641be956a7b",
"assets/packages/hyphenatorx/assets/language_te.json": "aab19b4ed89174a98527126f4c8f5278",
"assets/packages/hyphenatorx/assets/language_hr.json": "c47afa087612fcec9b03e359ecba21c9",
"assets/packages/hyphenatorx/assets/language_lt.json": "193c8ed815fda87ec76e550beb2c6b13",
"assets/packages/hyphenatorx/assets/language_pl.json": "465eb8b4886d611a78c4d637816aa747",
"assets/packages/hyphenatorx/assets/language_sh_cyrl.json": "2d6190383adddee8216db3ae6a6a803e",
"assets/packages/hyphenatorx/assets/language_sv.json": "e96a74ac989f945a532519c09ddeb8a5",
"assets/packages/hyphenatorx/assets/language_ka.json": "6c3fc528796096ce2ca3a7ec5543069a",
"assets/packages/hyphenatorx/assets/language_hsb.json": "1c810859645ad347733939a53e4eecf4",
"assets/packages/hyphenatorx/assets/language_la_x_classic.json": "ab126029009d7641218aaea72fe86d14",
"assets/packages/hyphenatorx/assets/language_ta.json": "7ad8015adba2d581dad1d0bd9a37de4d",
"assets/packages/hyphenatorx/assets/language_da.json": "120cd341e7b9582160fa1864b0e74607",
"assets/packages/hyphenatorx/assets/language_ga.json": "b7500e754a15e0dd6a673ed8974ff639",
"assets/packages/hyphenatorx/assets/language_gl.json": "f867ce63a47135031212ed4b314b5b1b",
"assets/packages/hyphenatorx/assets/language_mul_ethi.json": "e1d9121676a508f1186e1a51c9510ca9",
"assets/packages/hyphenatorx/assets/language_bn.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_ro.json": "cad16d9be24633726f4c546f89752043",
"assets/packages/hyphenatorx/assets/language_zh_latn_pinyin.json": "0573cdf79d552dd0cec5b08e4e5c0cc3",
"assets/packages/hyphenatorx/assets/language_mn_cyrl.json": "cdc092042cea8027a762702578ff5477",
"assets/packages/hyphenatorx/assets/language_de_1996.json": "6a166052a23eb375b4c25e323e9089ed",
"assets/packages/hyphenatorx/assets/language_uk.json": "59e4e985ee5e1b55c6261cf207543050",
"assets/packages/hyphenatorx/assets/language_pa.json": "9ed942ab0486b9522b56db118ec0fb44",
"assets/packages/hyphenatorx/assets/language_de_ch_1901.json": "c5951052fb095c90db9a6844c31277db",
"assets/packages/hyphenatorx/assets/language_grc.json": "6a7e746a8a45e7c3ec3f155e1027c653",
"assets/packages/hyphenatorx/assets/language_gu.json": "1aaad8f7c610501f8e3afed18de7a865",
"assets/packages/hyphenatorx/assets/language_es.json": "879a7b1392bdef59a1690765b9fefdff",
"assets/packages/hyphenatorx/assets/language_af.json": "28351132e29a4511c32916f6e95d20ec",
"assets/packages/hyphenatorx/assets/language_de_1901.json": "a0bd6a5e3079be7f61bff91bf26887d3",
"assets/packages/hyphenatorx/assets/language_ml.json": "1b34f0a9b12c9a155f419473c1e5650b",
"assets/packages/hyphenatorx/assets/language_id.json": "f13ed90293f4759c31b711d6aa12d112",
"assets/packages/hyphenatorx/assets/language_hi.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_eu.json": "f95aa286d216c74f6c1bd020e23a6a80",
"assets/packages/hyphenatorx/assets/language_nl.json": "2d4b858e6f31e3931e23c325496dc683",
"assets/packages/hyphenatorx/assets/language_cop.json": "6e473484979b4f998316355c83acfe36",
"assets/packages/hyphenatorx/assets/language_as.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_or.json": "0d577fbc142e3d37474d4f6ae1be1d00",
"assets/packages/hyphenatorx/assets/language_fur.json": "5cb194c03480526b59d399c92c851b35",
"assets/packages/hyphenatorx/assets/language_rm.json": "10dcdf08d92a0b32b168eaa0453faf3c",
"assets/packages/hyphenatorx/assets/language_pms.json": "9edb405668d8786e1d4318a3e6a18126",
"assets/packages/hyphenatorx/assets/language_hu.json": "a21372487888973207c8b9b6700b2270",
"assets/packages/hyphenatorx/assets/language_is.json": "eec6ce02aa68c8917a557a9d11e485d3",
"assets/packages/hyphenatorx/assets/language_kn.json": "295d3717aae5e668f88ad73e367b425f",
"assets/packages/hyphenatorx/assets/language_en_gb.json": "37cef53e88a438af9fcc0c9c39f77d71",
"assets/packages/hyphenatorx/assets/language_hy.json": "fc7ed76ad3ac4dbec9492d520c87ef0a",
"assets/packages/hyphenatorx/assets/language_tr.json": "768a6e3a51913f04387ffb73cddcdc37",
"assets/packages/hyphenatorx/assets/language_el_monoton.json": "d0aab2d432c3891039ecb2bcaa172bc9",
"assets/packages/hyphenatorx/assets/language_sa.json": "3f75df9404ef3fcfd4028517f1808f04",
"assets/packages/hyphenatorx/assets/language_ru.json": "ee7ba571494729f6730ac42d29f1ddf9",
"assets/packages/hyphenatorx/assets/language_sk.json": "03a6f38dd4e0c47946c1cc4d225b2b35",
"assets/packages/hyphenatorx/assets/language_en_us.json": "218751cee7b6d50fcdc76671639b1f59",
"assets/packages/hyphenatorx/assets/language_ia.json": "4fd10dfc676dd12813255cfdbd10160c",
"assets/packages/hyphenatorx/assets/language_eo.json": "d64fcffc1b960c7f9fdf01dfb1967ef0",
"assets/packages/hyphenatorx/assets/language_fr.json": "92bf3f19cb4d2bb2862fb7f478b7a169",
"assets/packages/hyphenatorx/assets/language_cy.json": "d99fadaee445724bf24c78149f3c14c4",
"assets/packages/hyphenatorx/assets/language_nb.json": "d9a86ca6b22c640f446c7b29d9533a79",
"assets/packages/hyphenatorx/assets/language_ca.json": "c9031d91386a3a29df196db082dd4c4a",
"assets/packages/hyphenatorx/assets/language_th.json": "81a169edd244703cd2e0c1fe5c42502b",
"assets/packages/hyphenatorx/assets/language_mr.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_it.json": "818ab0c9a1a3dcd1616078901418030b",
"assets/packages/hyphenatorx/assets/language_mn_cyrl_x_lmc.json": "20a0ad88ddcaf7551b2845e74b018070",
"assets/packages/hyphenatorx/assets/language_bg.json": "53cfe5471051d7148f8ce3ab7c39f415",
"assets/packages/hyphenatorx/assets/language_cs.json": "c6beadc7b7ef04593018ec84b43106bb",
"assets/packages/hyphenatorx/assets/language_et.json": "ef1082d6d2a9e8c9f3e364b25ee54ee6",
"assets/packages/hyphenatorx/assets/language_lv.json": "4972684b7c56349e81e0d0092f2bf88b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "c9e8e9d544c8a4c73ac9f01d50d9437d",
"assets/fonts/MaterialIcons-Regular.otf": "1bed34ff3ae166588d21c1874cedcd11",
"assets/assets/google_fonts/Archivo-Bold.ttf": "1eab2d39d7ab68303d0f814aea7d1269",
"assets/assets/google_fonts/Archivo-ExtraBold.ttf": "72ffb0d0455bf9ab033e1819dbc69b3b",
"assets/assets/google_fonts/Archivo_Condensed-ExtraBold.ttf": "14899a824d2401f25142084e1222a66a",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Black.ttf": "80559378be16030937282f4a0e2e7f6a",
"assets/assets/google_fonts/Archivo_SemiExpanded-Thin.ttf": "c86f9133c23ee55533d2ffe3f4ac28a2",
"assets/assets/google_fonts/Archivo_ExtraCondensed-ExtraLight.ttf": "44d4619ab459d457753ba3d279fb52dd",
"assets/assets/google_fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/google_fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/google_fonts/Archivo_Condensed-ExtraLightItalic.ttf": "af7114aabd5bd7f27a9eb45ef0bb4ad8",
"assets/assets/google_fonts/Archivo_SemiExpanded-LightItalic.ttf": "71553d4fcbb865e85e78fdf5df03fd21",
"assets/assets/google_fonts/Archivo_SemiCondensed-Black.ttf": "39d40ef7b7fd9b3ffb3010e52cdfe844",
"assets/assets/google_fonts/Archivo-MediumItalic.ttf": "6b31e2c2a43fda96db4551ed19d1eb78",
"assets/assets/google_fonts/Archivo_Expanded-BlackItalic.ttf": "a2cebce7fa47816b02f1b6795cebcaf1",
"assets/assets/google_fonts/Archivo_SemiCondensed-ExtraBold.ttf": "a58476230a0ad5481115eef8506f3273",
"assets/assets/google_fonts/Archivo_SemiCondensed-BlackItalic.ttf": "9cc5208a28a7cb789b6894b34a8ac3f9",
"assets/assets/google_fonts/Archivo_SemiExpanded-Regular.ttf": "d4e188c4a0db16ee28b4bcd0ee66d5f1",
"assets/assets/google_fonts/Archivo_Condensed-Italic.ttf": "90896b6cff32a801469e7d4886c3db4e",
"assets/assets/google_fonts/Archivo_SemiExpanded-Bold.ttf": "a58d9b9fbcf91bf21c01c9c404754677",
"assets/assets/google_fonts/Archivo_Condensed-ExtraLight.ttf": "cc2f426cb3d18a55aeba826a33a6032c",
"assets/assets/google_fonts/Archivo_SemiExpanded-ThinItalic.ttf": "a32e2c342c869fb84a75b1d698c8e17f",
"assets/assets/google_fonts/Archivo_SemiCondensed-Italic.ttf": "bfda4b785a1e0edf649c7a0ed53cdf76",
"assets/assets/google_fonts/Archivo_SemiCondensed-SemiBoldItalic.ttf": "34c98c756ad0777fe1ade15ec4adf418",
"assets/assets/google_fonts/Archivo_Condensed-SemiBold.ttf": "cdbc0a90127c2974765c1fd872d47f55",
"assets/assets/google_fonts/Archivo_ExtraCondensed-SemiBoldItalic.ttf": "a723256be5a5725600617ade3f226c62",
"assets/assets/google_fonts/Archivo_SemiCondensed-Thin.ttf": "682dd0b79b749714c2c006198f24fb47",
"assets/assets/google_fonts/Archivo_SemiCondensed-ExtraLightItalic.ttf": "aeb4b95c2b24ca94e2f5fc9bd59e6c42",
"assets/assets/google_fonts/Archivo_ExtraCondensed-ThinItalic.ttf": "cc47f358f15604ef0c470b9515f4f293",
"assets/assets/google_fonts/Archivo_Expanded-ExtraLight.ttf": "1c262824bf16beb4cc9703025a9ba63e",
"assets/assets/google_fonts/Archivo_Condensed-Bold.ttf": "2cbc16208db19f02f059c026cc296be5",
"assets/assets/google_fonts/Archivo_ExtraCondensed-BlackItalic.ttf": "7ca39115023e301f45c121380eee8b5c",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Italic.ttf": "2d231c9f325752af50d464e69cd15a00",
"assets/assets/google_fonts/Archivo_SemiExpanded-ExtraBoldItalic.ttf": "4b20c385fdd4f3940b332ad096ed7252",
"assets/assets/google_fonts/Archivo_ExtraCondensed-ExtraLightItalic.ttf": "a0f0ebfd08e94ec68c185fd593a36908",
"assets/assets/google_fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/google_fonts/Archivo-Regular.ttf": "ee3dc5e9c7970e30aad97c909f1a3948",
"assets/assets/google_fonts/Archivo_SemiCondensed-Regular.ttf": "7a58e5d19b39533d5be3d1dbc77c9fc3",
"assets/assets/google_fonts/Archivo_Expanded-SemiBold.ttf": "7ff33b0a155c36969219446865d4ba2c",
"assets/assets/google_fonts/Archivo_SemiCondensed-Medium.ttf": "937cf667cf43adea2ec54ca784241c7d",
"assets/assets/google_fonts/Archivo_ExtraCondensed-LightItalic.ttf": "289f7b5f76f1902bf5bff72e7eba78a6",
"assets/assets/google_fonts/Archivo_SemiCondensed-MediumItalic.ttf": "ba4daa94a03ef9b72d0e6b5655a15851",
"assets/assets/google_fonts/Archivo_Expanded-ThinItalic.ttf": "99817506c96711e4c22a86498cc0cfdc",
"assets/assets/google_fonts/Archivo_Condensed-Black.ttf": "21658dc8c09fc4365872fc8db122da38",
"assets/assets/google_fonts/Archivo_ExtraCondensed-BoldItalic.ttf": "9c2fa10a6a31ef0f26cc143ad85515fd",
"assets/assets/google_fonts/Archivo_SemiExpanded-SemiBoldItalic.ttf": "ed6b44a2be09bfbd4ed5c4bd680bbe6f",
"assets/assets/google_fonts/Archivo_SemiCondensed-Light.ttf": "1c3cf325943c033970b9d0778a038146",
"assets/assets/google_fonts/Archivo_Condensed-BlackItalic.ttf": "7c81e3baab9db646078745222acf1604",
"assets/assets/google_fonts/Archivo-LightItalic.ttf": "b665b62e060c43474bc9ac172e22a3ff",
"assets/assets/google_fonts/Archivo_Expanded-Black.ttf": "6be88616aacb29e4d349be62c4e9a0d4",
"assets/assets/google_fonts/Archivo-BlackItalic.ttf": "51eccc57254bf66c9c252a03e69aa30d",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Light.ttf": "cc7ef1885246cdadbe6a0aa4bd2fd621",
"assets/assets/google_fonts/Archivo_Expanded-Regular.ttf": "bfe7251c3191b5d92c4d12a016d7eb56",
"assets/assets/google_fonts/Archivo_SemiCondensed-Bold.ttf": "79b88770cf0161d0ba82093e502ba3b2",
"assets/assets/google_fonts/Archivo_Condensed-BoldItalic.ttf": "7c6bbcf42d8c4a0549da56b3c6bf7b41",
"assets/assets/google_fonts/Archivo_Expanded-ExtraLightItalic.ttf": "ad63539bd6290d72d09ed194eca15d1a",
"assets/assets/google_fonts/Archivo_Condensed-Light.ttf": "fb3d23111a91fa0683204676852d58e9",
"assets/assets/google_fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/google_fonts/Archivo_SemiExpanded-BlackItalic.ttf": "ae5eb97b8d7508b8fa64ad18515faba5",
"assets/assets/google_fonts/Archivo_SemiCondensed-ThinItalic.ttf": "2c9484309db8cca88418ca8557da8dd0",
"assets/assets/google_fonts/Archivo_Expanded-Bold.ttf": "1790cc709b8da70193de0c97f15c20e4",
"assets/assets/google_fonts/Archivo_SemiExpanded-MediumItalic.ttf": "c9744c593115c0952cfb84660f02694d",
"assets/assets/google_fonts/Archivo_SemiExpanded-BoldItalic.ttf": "607a3bc3199806c660663f2ccb5168c3",
"assets/assets/google_fonts/Archivo_SemiExpanded-Light.ttf": "a9a0ee4a1b82cb7a392786f7d6d8fd1a",
"assets/assets/google_fonts/Archivo_SemiCondensed-ExtraLight.ttf": "2c4be0242ab45d32c10ce38720c576fd",
"assets/assets/google_fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/google_fonts/Archivo_Condensed-Regular.ttf": "f4461794df25e30961eba7e058f0b69d",
"assets/assets/google_fonts/Archivo-ExtraLightItalic.ttf": "b2c7889e0969d2009319e3137eedbad3",
"assets/assets/google_fonts/Archivo-SemiBoldItalic.ttf": "65eafd100810eeb164448abb7a60a223",
"assets/assets/google_fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/google_fonts/Archivo_ExtraCondensed-ExtraBoldItalic.ttf": "374645c00eb88197ceca4fc7188f8863",
"assets/assets/google_fonts/Archivo_Expanded-SemiBoldItalic.ttf": "b5629a83fba582dd13917fd01a2d680a",
"assets/assets/google_fonts/Archivo_Expanded-BoldItalic.ttf": "0296c9f7b3d7850d7e8f30b162fc0c94",
"assets/assets/google_fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/google_fonts/Archivo_ExtraCondensed-MediumItalic.ttf": "fe140415bc32bd84d38c4fd17a2bc879",
"assets/assets/google_fonts/Archivo_ExtraCondensed-ExtraBold.ttf": "efaa5e4b4252b6ed1184540f3b17ac1b",
"assets/assets/google_fonts/Archivo-Thin.ttf": "4a155d7ca7815c5e53364d9d90b94389",
"assets/assets/google_fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/google_fonts/Archivo_Condensed-LightItalic.ttf": "acadb80e0a6683c3a09c568cd0d007b9",
"assets/assets/google_fonts/Archivo_SemiCondensed-ExtraBoldItalic.ttf": "f1ffe00798130c18985d90cb005516b4",
"assets/assets/google_fonts/Archivo-ThinItalic.ttf": "99f686f83c7adcb8de27fac32f43ce91",
"assets/assets/google_fonts/Archivo-BoldItalic.ttf": "db38e344b0e97bd5f4f5c54fe53a523a",
"assets/assets/google_fonts/Archivo_Condensed-Thin.ttf": "700023a41440a905497217c34e748a51",
"assets/assets/google_fonts/Archivo-ExtraLight.ttf": "398c10989a4367daedc48cd246a0d7a9",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Medium.ttf": "171cba5acf583fa09694fc46f3ce0b21",
"assets/assets/google_fonts/Archivo_SemiExpanded-SemiBold.ttf": "b02256d85463588c2b873ebd8254dec0",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Regular.ttf": "69f156ae6c16b1ad957a42a7a926cec0",
"assets/assets/google_fonts/Archivo_SemiExpanded-Black.ttf": "db72e9aeca9a96efdd3d35028d232282",
"assets/assets/google_fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/google_fonts/Archivo_Expanded-Medium.ttf": "5964e53d9907d34556bf4643aef4f85e",
"assets/assets/google_fonts/Archivo_SemiCondensed-BoldItalic.ttf": "588e2f8793907ff7832c732f76a316cc",
"assets/assets/google_fonts/Archivo_SemiExpanded-ExtraLightItalic.ttf": "08d5e2f6052037d0040318ca3ea6bdeb",
"assets/assets/google_fonts/Archivo_ExtraCondensed-SemiBold.ttf": "4674594e66f463acfdd3053d6a80b5c7",
"assets/assets/google_fonts/Archivo_Expanded-Italic.ttf": "3f47e532dbec131c7ee28cf75cdbb925",
"assets/assets/google_fonts/Archivo-Light.ttf": "c7099b22c381b3649ed9a19070a573cf",
"assets/assets/google_fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/google_fonts/Archivo_Expanded-ExtraBoldItalic.ttf": "56f7721aace42bd9f0f9b41ea168dcf1",
"assets/assets/google_fonts/Archivo_Condensed-MediumItalic.ttf": "6e979712c63b9f38bc1f2dc257b39f59",
"assets/assets/google_fonts/Archivo-Medium.ttf": "1397fc1760db002d950c02e406eb8dc6",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Thin.ttf": "db5d352e167933f204d47d72f338cf3d",
"assets/assets/google_fonts/Archivo_SemiExpanded-Italic.ttf": "c819e15bb45272ad2587c6054ef2d80e",
"assets/assets/google_fonts/Archivo_Expanded-Thin.ttf": "5e0e4a970e11b9ca839a23fa2e43010e",
"assets/assets/google_fonts/Archivo_SemiExpanded-ExtraBold.ttf": "d1e0a7fcde39ccb0c21ae80cb2fb5866",
"assets/assets/google_fonts/Archivo_Condensed-Medium.ttf": "08e088825d0ef4a3df038dccf41d32b2",
"assets/assets/google_fonts/Archivo_SemiExpanded-Medium.ttf": "bc67ec14479b7a866c0aea7b51bc0f97",
"assets/assets/google_fonts/Archivo_Expanded-ExtraBold.ttf": "fa6dd4ee3482c9808d1573357a6a1209",
"assets/assets/google_fonts/Archivo_Condensed-ExtraBoldItalic.ttf": "768dea799aaaed6e8f630e6a3627835d",
"assets/assets/google_fonts/Archivo_Expanded-LightItalic.ttf": "53488787936448d928fb6e7de01b97c4",
"assets/assets/google_fonts/Archivo_Condensed-ThinItalic.ttf": "dd9011e6f8f192486893010c73be1005",
"assets/assets/google_fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/google_fonts/Archivo_SemiExpanded-ExtraLight.ttf": "d3a5206e809c244272c7d0275ab5da40",
"assets/assets/google_fonts/Archivo_SemiCondensed-LightItalic.ttf": "df43620af9b17893613a25f9bc0af685",
"assets/assets/google_fonts/Archivo_Expanded-MediumItalic.ttf": "6f10f8b7d12d7c94e6a9533e43114fe4",
"assets/assets/google_fonts/Archivo-Black.ttf": "d4580cf6cf7b4912536500d2f56eb22c",
"assets/assets/google_fonts/Archivo_Condensed-SemiBoldItalic.ttf": "d5573238ad5b780cda70867cd7edeae7",
"assets/assets/google_fonts/Archivo-ExtraBoldItalic.ttf": "fa10f5b8ae829fbc419084bd599a9cca",
"assets/assets/google_fonts/Archivo_ExtraCondensed-Bold.ttf": "c6e0f37c42023868824938aaa7a61567",
"assets/assets/google_fonts/Archivo-Italic.ttf": "69054571ced85cbde8902268e06fb4de",
"assets/assets/google_fonts/Archivo-SemiBold.ttf": "ef5277bf4d7514c4403c1b2b72dad0df",
"assets/assets/google_fonts/Archivo_Expanded-Light.ttf": "c202dead8e72bfa8bb6bed6dfd0ef55f",
"assets/assets/google_fonts/Archivo_SemiCondensed-SemiBold.ttf": "ef3555df1ab4764166817edfbdc02409",
"assets/assets/google_fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/img/icons/quote_white_small.png": "432c0262b266315327fc0023cc081be2",
"assets/assets/img/photos/new.jpg": "e0e139d210d88bbed71f0771b61d9ff4",
"assets/assets/img/photos/newsletter.jpg": "03c620ccff84ed3c94e79068a2b254be",
"assets/assets/img/photos/quote.jpg": "109f7a31919b2975826376d563a64c61",
"assets/assets/img/logo/icon-ffffff.png": "23e2e3755325a6a2551a9646bee88b10",
"assets/assets/img/logo/logo_dark.png": "8cd660d9833f71df31e7ef2e3c29de41",
"assets/assets/img/logo/icon-transparent.png": "13d37a37cca8e205ef795ed5fafc8a78",
"assets/assets/img/logo/logo.png": "e0330cfcc751b55e5a1108a6f4e8b754",
"assets/assets/placeholder/placeholder.png": "9d0e60cf854d9e6315d045acc938ccc3",
"assets/assets/placeholder/placeholder.pdf": "0a32b00ba172836a0eec6e00f480bcf0",
"assets/assets/json/quotes.json": "04a9a60f9a837f2c7f312b994e93457c",
"assets/NOTICES": "0d0ff51d6e663344da89fe7231f292ec",
"assets/AssetManifest.bin": "81b58e1f307f1e21dc347bc4cecdd520",
"assets/FontManifest.json": "b3932db11883e3f44e176de7d36df915",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
