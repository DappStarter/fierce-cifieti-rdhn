require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan random pitch snake grace person equal gift'; 
let testAccounts = [
"0x9df09a2306fb54716b0c5ee51123cb59c5322ada55ee774ea5df7f825dc0527c",
"0xfd474a119e257a57db07236b47c4259b7d446aeac92c11e4b8cab4108a602575",
"0x8e1b84c42b38a1919c3769079a2caa7866a42791855486a24ff70fd2d4367696",
"0x2b41961ef535d2fa49d1b5b41188bf693b5ce82eec22432ba60b6d64be1ba09f",
"0x9d10c5ba66713957d51ea8f9466b06a147b0b75b6a509b56d589842b11e99c14",
"0xdf43bdf3716103b7cfee65e16541cc9945db01e0157a3564f2204f5b5225bb8c",
"0x530106a05b7ffc3403c9e015cc01b8fce7a5cb68c4299583ea34c84957267f68",
"0xe54e7eac673ed4871191f23849c3cb29d8dbae0e6df5638cd4fc66d37a64e10e",
"0x6000ff41d8e3be2a78b5f45d2c2e11a5fe4ae4fba1be0da8d89edf2a4f1bb441",
"0xc2b70a0c13ae7f2e0393728bc27e8e425adcdfa47afc812b7b0952fb9b7e0fe7"
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

