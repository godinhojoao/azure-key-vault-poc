const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
require("dotenv").config();

const credential = new DefaultAzureCredential({
  tenantId: process.env["AZURE_TENANT_ID"],
  clientId: process.env["AZURE_CLIENT_ID"],
});
const keyVaultName = process.env["KEY_VAULT_NAME"];
if (!keyVaultName) {
  throw new Error("KEY_VAULT_NAME is empty");
}

const url = "https://" + keyVaultName + ".vault.azure.net";
const client = new SecretClient(url, credential);

(async function () {
  try {
    const secret = await client.getSecret(process.env["SECRET_KEY_NAME"]);
    console.log('secret', secret)
  } catch (error) {
    console.error("Error retrieving secret:", error.message);
  }
})()


// code to use with node v12
// const { ClientSecretCredential } = require("@azure/identity");
// const { SecretClient } = require("@azure/keyvault-secrets");
// require("dotenv").config();

// const credential = new ClientSecretCredential({
//   tenantId: process.env.AZURE_TENANT_ID,
//   clientId: process.env.AZURE_CLIENT_ID,
//   clientSecret: process.env.AZURE_CLIENT_SECRET,
// });

// const keyVaultName = process.env.KEY_VAULT_NAME;
// if (!keyVaultName) {
//   throw new Error("KEY_VAULT_NAME is empty");
// }

// const url = `https://${keyVaultName}.vault.azure.net`;
// const client = new SecretClient(url, credential);

// (async function () {
//   try {
//     const secret = await client.getSecret(process.env.SECRET_KEY_NAME);
//     console.log('secret', secret);
//   } catch (error) {
//     console.error("Error retrieving secret:", error.message);
//   }
// })();
