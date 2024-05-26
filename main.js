/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTContainer = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (id, name, level, humanity) {
   const nft =  {
      "id": id,
      "name": name,
      "level": level,
      "humanity": humanity,
   };
   NFTContainer.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   const total = NFTContainer.length;
   if (total < 1) {
      return console.log("Currently no NFT's exist!\n");
   }
   for (let x = 0; x < total; x += 1) {
      let nft = NFTContainer[x];
      console.log("Your Dark Souls Character:");
      console.log("ID:", nft.id);
      console.log("Name:", nft.name);
      console.log("Level:", nft.level);
      console.log("Humanity:", nft.humanity);
      console.log("\n");
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFT's minted =", NFTContainer.length, "\n");
}

// call your functions below this line
listNFTs();

mintNFT(1, 'theEnd', 89, 12);
mintNFT(2, "bruh", 6, 7);
mintNFT(3, "solaire", 135, 80);

getTotalSupply();

listNFTs();
