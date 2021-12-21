require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name random stereo eternal grace local bottom genuine'; 
let testAccounts = [
"0xeb486061b189901a104d13356c87b2b3b9a33d8dea176d0000083f15fbc3348a",
"0x6dc602b1fb1395dd4c899314626a5de1a2c5aec01348f9f499e19b6dedbb01e4",
"0x35df3a5dc031bcafbad4b4238e1a372a24b544cf4fd16d23e568592978f7ab76",
"0x4a8da16d0e43c023d18ca17ce3506591d669436d5ae4a088c5f5742912614cec",
"0xd03e0e0412bde54a858a122fc2b5a1624b69cd8fa661ba67459dcd5b63bba249",
"0x2538baea78cfb9be681df07e27fa2aedd0c1902b96d4f156a9e0b6bfe69ab816",
"0x728f5fed6fdca637130b69445862e9a9a62664875437cc1b05a3b6bc3b64e461",
"0x93fb18332ce2471860ec0e50b1aebf1b5254e0cf542f5896ec6564f2c041c511",
"0x9e8e92798ef13b2ee615464e1a3a05189fc8160af4e7e02db017706a4eea952b",
"0x84d2ea2f522a1948d195f9bd9058e5bafa7693f5a76e4d06d7d3528c32f0dd25"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

