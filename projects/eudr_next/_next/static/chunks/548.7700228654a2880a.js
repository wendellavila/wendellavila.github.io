"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{3548:function(e){e.exports=JSON.parse('{"homePage":{"title":"EUDR Compliance Tracking","description":"EUDR Compliance Tracking Platform","labels":{"navbar":{"title":"EUDR Tracking","menu":"Menu","goBack":"Go Back"},"drawer":{"changePassword":"Change Password","logout":"Log Out"},"changePasswordModal":{"title":"Change Password","currentPassword":"Current Password","newPassword":"New Password","repeatNewPassword":"Repeat New Password","confirm":"Confirm"},"orders":{"title":"Orders","orderNumber":"Order Number","date":"Date","volume":"Volume","min":"Min","max":"Max","minVolume":"Minimum Volume","maxVolume":"Maximum Volume","volumeRange":"Volume Range","searchOrderNumber":"Search Order Number","dateFrom":"Date From","dateTo":"Date To","sortBy":"Sort by","sortedBy":"Sorted by","ascending":"ascending","descending":"descending","rowsPerPage":"Rows per page","noOrdersError":"Orders could not be loaded","noFilteredOrdersAlert":"No orders found with the specified filters","clear":"Clear","hideFilters":"Hide Filters","showFilters":"Show Filters"}}},"loginPage":{"title":"EUDR Compliance Tracking","description":"EUDR Compliance Tracking Platform","labels":{"banner":{"title":"EUDR Compliance Tracking Platform","learnMore":"Learn More","deforestationReports":"Deforestation Reports","deforestationReportsDescription":"Check the status of coffee suppliers and supplying farms in 10 different government agencies and NGOs","geopositioning":"Geopositioning","geopositioningDescription":"View the perimeter of supplying farms on a map and export coordinates to GeoJSON or KML"},"login":{"title":"Log In","emailAddress":"Email Address","password":"Password","showPassword":"Show","hidePassword":"Hide","rememberMe":"Remember me","forgotPassword":"Forgot password?","signUp":"Don\'t have an account? Register","switchLanguage":"Switch Language","showHidePassword":"Show/Hide Password","noScript":"You need to enable JavaScript on your browser to be able to log in."},"about":{"title":"About the Platform","eudr":{"title":"What is EUDR?","details":"The European Union Deforestation Regulation (EUDR) is a legal framework aimed at minimizing the European Union\'s contribution to global deforestation and forest degradation, as well as reducing greenhouse gas emissions and biodiversity loss.\\nThe EUDR is part of the European Green Deal, a strategy with the goal of making Europe climate neutral by 2050. This regulation specifically targets commodities such as timber, soy, beef, cocoa, coffee, palm oil, rubber, and their derivatives.\\nOperators and traders, both in Brazil and globally, must comply with the EUDR when exporting certain commodities to the EU. The law bans the import of products originating from areas with any level of deforestation identified up to December 2020."},"deforestation":{"title":"How is deforestation monitored?","details":"To certify that our coffee is deforestation-free, we retrieve information from 10 different government agencies and NGOs that publish data on deforestation. They are:\\nSome of these agencies, such as PRODES and MapBiomas, monitor forest regions via satellite and publish deforestation alerts periodically. Others, such as IBAMA and SEMA-MT, publish lists of offenders and embargoed areas.\\nThe geolocation of farms are retrieved from SICAR - the Rural Environmental Registry System, and with it we are able to cross-reference deforestation alerts and embargoes with coffee-supplying farms.\\nBy using this data, we can guarantee that the coffee being exported comes from farms without deforestation and belonging to an owner without environmental embargoes."},"platform":{"title":"How does the platform work?","details":"The EUDR compliance tracking platform allows our customers to view deforestation reports and the geolocation of farms that supplied coffee for their purchases.\\nFor each of their purchases, the customer has access to the list of farms that supplied coffee to it. The platform lists the status of each farm in all of the deforestation monitoring agencies at the time the coffee was shipped, giving transparent access to customers to the same data we use to certify the coffee shipped.\\nIn addition to deforestation reports, the geolocation of each farm is displayed in an interactive map. Their coordinates can be exported in GeoJSON and KML formats."},"access":{"title":"How do I gain access to the platform?","details":"Access to the platform is granted on demand to our customers. To request access, please contact placeholder@email.com."}}}},"reportPage":{"title":"EUDR Compliance Tracking","description":"EUDR Compliance Tracking Platform","labels":{"navbar":{"title":"EUDR Report","menu":"Menu","goBack":"Go Back"},"geolocationPanel":{"title":"Geolocation","coordinates":"Coordinates","farmId":"Farm ID","city":"City","state":"State","area":"Area (ha)","viewOnMaps":"View on Google Maps","geolocationNotFound":"Supplier geolocation could not be retrieved."},"reportsPanel":{"title":"Deforestation Reports","id":"Protocol ID","name":"Name","institution":"Institution","details":"Details","status":"Status","statusLocked":"Locked","statusUnlocked":"Unlocked","lastUpdate":"Last update","protocolItems":{"UNIDADES_CONSERVACAO":{"name":"Natural Conservation Areas","institution":"Ministry of Environment and Climate Change","lockedDetails":"Property have superposition with natural conservation areas.","unlockedDetails":"Property does not have superposition with natural conservation areas."},"EMBARGO_IBAMA_DOCUMENT":{"name":"IBAMA Embargo - Supplier","institution":"IBAMA","lockedDetails":"Supplier is listed in the IBAMA embargo list.","unlockedDetails":"Supplier is not listed in the IBAMA embargo list."},"PRODES_ANY":{"name":"PRODES Embargo","institution":"PRODES","lockedDetails":"Property have superposition with PRODES embargoed areas since 31/12/2020.","unlockedDetails":"Property does not have superposition with PRODES embargoed areas since 31/12/2020."},"EMBARGO_IBAMA":{"name":"IBAMA Embargo - Property","institution":"IBAMA","lockedDetails":"Property have superposition with IBAMA embargoed areas since 31/12/2020.","unlockedDetails":"Property does not have superposition with IBAMA embargoed areas since 31/12/2020."},"EMBARGO_ICMBIO_DOCUMENT":{"name":"ICMBio Embargo - Supplier","institution":"ICMBio","lockedDetails":"Supplier is listed in the ICMBio embargo list.","unlockedDetails":"Supplier is not listed in the ICMBio embargo list."},"ALERTA_MAPBIOMAS":{"name":"MapBiomas Alert","institution":"MapBiomas","lockedDetails":"Property have superposition with MapBiomas deforestation alerts since 31/12/2020.","unlockedDetails":"Property does not have superposition with MapBiomas deforestation alerts since 31/12/2020."},"SITUACAO_CAR":{"name":"CAR Status","institution":"SICAR","lockedDetails":"Property have CAR with status inactive or cancelled.","unlockedDetails":"Property have CAR with status active or pending."},"EMBARGO_SEMA":{"name":"SEMA-MT Embargo - Property","institution":"SEMA-MT","lockedDetails":"Property does not have superposition with SEMA-MT embargoed areas.","unlockedDetails":"Property does not have superposition with SEMA-MT embargoed areas."},"EMBARGO_SLAVERIES_DOCUMENT":{"name":"\\"Dirty List\\" of Slave Labor","institution":"Ministry of Labor and Employment","lockedDetails":"Supplier islisted in Brazil\'s \\"Dirty List\\" of individuals involved in slave labor.","unlockedDetails":"Supplier is not listed in Brazil\'s \\"Dirty List\\" of individuals involved in slave labor."},"QUILOMBOS":{"name":"Superposition with Quilombo Communities","institution":"INCRA","lockedDetails":"Property have superposition with quilombo communities.","unlockedDetails":"Property does not have superposition with quilombo communities."},"TERRAS_INDIGENAS":{"name":"Superposition with Indigenous Land","institution":"FUNAI","lockedDetails":"Property have superposition with indigenous land.","unlockedDetails":"Property does not have superposition with indigenous land."},"EMBARGO_SEMA_DOCUMENT":{"name":"SEMA-MT Embargo - Supplier","institution":"SEMA-MT","lockedDetails":"Supplier is listed in the SEMA-MT embargo list.","unlockedDetails":"Supplier is not listed in the SEMA-MT embargo list."},"EMBARGO_ICMBIO":{"name":"ICMBio Embargo - Property","institution":"ICMBio","lockedDetails":"Property have superposition with ICMBio embargoed areas.","unlockedDetails":"Property does not have superposition with ICMBio embargoed areas."}}},"suppliersList":{"title":"Coffee Suppliers","supplierName":"Supplier Name","farmId":"Farm ID","status":"Status","details":"Details","statusLocked":"Locked","statusUnlocked":"Unlocked","geolocation":"Geolocation","deforestationReports":"Deforestation Reports","expand":"Expand","close":"Close","exportReports":"Export Reports","exportCoordinates":"Export Coordinates","exportAllSuppliers":"Export All Suppliers","noSuppliersError":"Supplier list could not be loaded"},"orderDetails":{"title":"Order Details","volume":"Volume","date":"Date","orderNumber":"Order Number","customer":"Customer","supplierNumber":"No. of Suppliers","status":"Status","statusLocked":"Locked","statusUnlocked":"Unlocked","noOrderDetailsError":"Order details could not be loaded"}}},"loadingScreen":{"labels":{"notRedirected":"Not redirected?","clickHere":"Click here","goToFrontPage":"to go to the front page."}}}')}}]);