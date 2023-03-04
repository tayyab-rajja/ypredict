/**
 *
 * @Attention_1 : all addresses in this file should be in lowercase!!!!!!!!!
 * @Attention_2 : change Mumbai rpc URL to mainnet rpc URL before deployment, in HeroSection.tsx
 * @Attention_3 : change Mumbai chainId to mainnet chainId before deployment, BuySection.tsx
 * @Attention_4 : you should declare the minimum value of USDT in the smart contract as valid integer, 1, 22, 250
 */

/**
 * @note : HOW T_ MODIFY WHITELIST ?
 * @Step 1 : grab your whitelist that line by line, and convert it to lowercase in this website "https://convertcase.net/"
 * @Step 2 : copy the result and paste it in this website "http://static.decontextualize.com/lines-to-json/"
 * @Step 3 : copy the result and paste it in this file, after the "whitelist = "
 * @Attention_1 : each time you time you modify the whitelist, you should redeploy the dapp
 * @Attention_2 : make sure that all addresses in the whitelist are in lowercase 
 */

export const whitelist = [
  "0xcf2b38a21d528b3f498fbc7b1078a33deaa5e5ef",
  "0x6fa6da462cba635b0193809332387cdc25df3e8d",
  "0xa88f31c972b0ec5d43b415a1c3049119512b99e4",
  "0x0a50bca232b2c5691e3af8a9aec2c3738f45844a",
  "0x360795778e0be0e2af054a164e87f7d63660be46",
  "0x63e28494f0841edcea878b413018c0c8c40e6741",
  "0x3ed67e72b1bc2fe122fea1f0f57a3003f7ee2433",
  "0xdf353e6999eab4e1f573873ad4556b253b9cae0e",
  "0xab20cdfc3fe26ae518b059a84294eabf97d7e1f3",
  "0x781e96cc8209bab6ae728096522ce2d78dd2fc96",
  "0x68d562e58ebf21c4a59db2f4dd39ee85c677afb6",
  "0xdd798366951de29b1c3159c1f4cfde3ecdd51ddc",
  "0xe40e227f5bac2b9a1a8db28788c20fd192d44832",
  "0x2127c0e129e63d2b0a33e13de054c04cefb10586",
  "0x1653a5be4e736715c7a5ee5fc35fea7a7cd69f24",
  "0x609bb877fc6e0f5ca6850232e48dbdb362598ff7",
  "0x6852083f799919173a9090c5a0af699764f632ad",
  "0x28cb1741936e95fc1e6ffe2f46901ce970355192",
  "0xcafad2f74c08ce91631e2d3bbef03d0aaa314036",
  "0x78a9c46daef446d7cd7a2a1d99518dd3a6a7abab",
  "0x8b63ee013c840380391e6b0b4d5983c741c7252e",
  "0x68d562e58ebf21c4a59db2f4dd39ee85c677afb6",
  "0x9c7977018b0b926b751f54e50e8e51ef2db8553f",
  "0x8b63ee013c840380391e6b0b4d5983c741c7252e",
  "0x7e6647a0daba3ba2ff1ccd067330df1459a2d033",
  "0xc54034edbe97bd9e0444b72ed2c2d6262a707028",
  "0x703091acdfae7254db0fb0c382b0dea755a8ec07"
];
