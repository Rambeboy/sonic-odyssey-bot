const _0x252d33=_0x3f43;(function(_0x2ac77c,_0x1833b5){const _0x1438a8=_0x3f43,_0x4d2c29=_0x2ac77c();while(!![]){try{const _0x5da96b=-parseInt(_0x1438a8(0x156))/0x1+parseInt(_0x1438a8(0x14a))/0x2+parseInt(_0x1438a8(0x15c))/0x3+parseInt(_0x1438a8(0x14d))/0x4+-parseInt(_0x1438a8(0x155))/0x5+-parseInt(_0x1438a8(0x14e))/0x6*(parseInt(_0x1438a8(0x14b))/0x7)+-parseInt(_0x1438a8(0x150))/0x8*(parseInt(_0x1438a8(0x14f))/0x9);if(_0x5da96b===_0x1833b5)break;else _0x4d2c29['push'](_0x4d2c29['shift']());}catch(_0x13a938){_0x4d2c29['push'](_0x4d2c29['shift']());}}}(_0x5032,0x75871));const {Connection,LAMPORTS_PER_SOL,Transaction,SystemProgram,sendAndConfirmTransaction,PublicKey,Keypair}=require(_0x252d33(0x149)),bip39=require(_0x252d33(0x160)),{derivePath}=require(_0x252d33(0x15d)),base58=require(_0x252d33(0x15e)),colors=require('colors'),DEVNET_URL='https://devnet.sonic.game/',TESTNET_URL=_0x252d33(0x14c);var NETWORK_TYPE=0x2,connection;async function setNetType(_0x2f836b){const _0x19e7c3=_0x252d33;NETWORK_TYPE=_0x2f836b,connection=new Connection(NETWORK_TYPE==0x2?TESTNET_URL:DEVNET_URL,_0x19e7c3(0x153));}function getConnection(){return connection;}function getNetType(){return NETWORK_TYPE;}async function sendSol(_0x7ab334,_0x2c6452,_0x225ae3){const _0x5300d1=_0x252d33,_0x162aee=new Transaction()['add'](SystemProgram[_0x5300d1(0x154)]({'fromPubkey':_0x7ab334[_0x5300d1(0x15f)],'toPubkey':_0x2c6452,'lamports':_0x225ae3*LAMPORTS_PER_SOL})),_0x2f34fa=await sendAndConfirmTransaction(connection,_0x162aee,[_0x7ab334]);console['log'](colors[_0x5300d1(0x151)](_0x5300d1(0x148)),_0x2f34fa);}function generateRandomAddresses(_0x55114a){const _0x5a0def=_0x252d33;return Array['from']({'length':_0x55114a},()=>Keypair[_0x5a0def(0x15b)]()[_0x5a0def(0x15f)][_0x5a0def(0x15a)]());}async function getKeypairFromSeed(_0x3a1f49){const _0x517494=_0x252d33,_0x5796b0=await bip39['mnemonicToSeed'](_0x3a1f49),_0x5c2610=derivePath(_0x517494(0x158),_0x5796b0[_0x517494(0x15a)]('hex'))[_0x517494(0x159)];return Keypair['fromSeed'](_0x5c2610[_0x517494(0x157)](0x0,0x20));}function _0x5032(){const _0x3ee9a7=['https://api.testnet.sonic.game/','3238092danDsf','6tCguas','108XbIPvi','138984oeLjkQ','green','fromSecretKey','confirmed','transfer','1605800fltGji','431080qjISVV','slice','m/44\x27/501\x27/0\x27/0\x27','key','toString','generate','2128386HVVsSG','ed25519-hd-key','bs58','publicKey','bip39','decode','Transaction\x20confirmed\x20with\x20signature:','@solana/web3.js','913004udBnOv','3733646UUmmNV'];_0x5032=function(){return _0x3ee9a7;};return _0x5032();}function getKeypairFromPrivateKey(_0x1e4122){const _0x1fb973=_0x252d33;return Keypair[_0x1fb973(0x152)](base58[_0x1fb973(0x147)](_0x1e4122));}function _0x3f43(_0x3c4d97,_0x534e51){const _0x5032a1=_0x5032();return _0x3f43=function(_0x3f4319,_0x2f0906){_0x3f4319=_0x3f4319-0x147;let _0x9407d1=_0x5032a1[_0x3f4319];return _0x9407d1;},_0x3f43(_0x3c4d97,_0x534e51);}const delay=_0xe17d07=>new Promise(_0x1c2847=>setTimeout(_0x1c2847,_0xe17d07));module['exports']={'sendSol':sendSol,'generateRandomAddresses':generateRandomAddresses,'getKeypairFromSeed':getKeypairFromSeed,'getKeypairFromPrivateKey':getKeypairFromPrivateKey,'setNetType':setNetType,'getNetType':getNetType,'DEVNET_URL':DEVNET_URL,'TESTNET_URL':TESTNET_URL,'getConnection':getConnection,'PublicKey':PublicKey,'LAMPORTS_PER_SOL':LAMPORTS_PER_SOL,'delay':delay};