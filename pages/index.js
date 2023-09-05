import { ConnectWallet, useTokenSupply,useContract,useAddress, useTokenBalance, useClaimToken } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const contractAddress ="0xDD720873AC7F0eFcaa27a03A26710c7edbeDD50B";
  const [amount, setAmount] = useState("");
  const address =useAddress();
  const {
    contract
  } = useContract(contractAddress);

  const {
    data: balance
  } =useTokenBalance(contract,address);

  const { data: supply } = useTokenSupply(contract);


  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center"
                
              }}
              
            />
           
          </div>
        <div className={styles.header}>
          <div className={styles.leftSide}>
          <h1 className={styles.title}>
            Padoru is coming, are you ready?
            
          </h1>
          
          <div className={styles.description}>
            <p>The new Meme you were waiting for! Padoru is here to conquer the cryptocurrency market!</p>
            <Image
              src="/images/padoruHD.png"
              alt="Placeholder preview of starter"
              width={450}
              height={600}
            />
          </div>
          </div>

          <div className={styles.rightSide}>
          <div className={styles.rightSideTittle} ><iframe    src="https://www.tickcounter.com/widget/countdown/4427114"></iframe></div>
            <div className={styles.rightSideTittle}>BUY YOUR PADORUS HERE</div>
            
          <div className={styles.rightSideWorld}>
              Padorus in the world:{" "}
              {supply?.displayValue-6000000}
               {" / "} {2000000} {" "} {supply?.symbol}

            </div>
            <div className={styles.rightSideWorld}> 
              Your PADORUS: 
              {balance?.displayValue}
            {balance?.symbol}
            </div>
            <p className={styles.rightSideWorldClaim} >---------1 PADORU = 0.00465 BNB---------</p>
            <div className={styles.columnpay}>
              <div>
                <p>You pay BNB:</p>
                <input className={styles.inputp} type="number" placeholder="BNB" value={amount} onChange={(e)=> setAmount(e.target.value)}/>

              </div>
              <div>
              <p>You get PADORU:</p>
              <input className={styles.inputp} type="number" value={amount/0.00465.toString()} onChange={(e)=> setAmount(e.target.value)} readOnly/>
              


              </div>
            </div>
            
          
          <p></p>
          <div className={styles.W3Button}>
          <Web3Button 
           contractAddress={contractAddress}
      
           action={(contract) => contract.erc20.claim(amount/0.00465.toString())}
           theme="dark"
          >
           Claim {amount/0.00465}{" "} {supply?.symbol}
          </Web3Button>
          </div>

          </div>
         



          
         

          
        </div>

        
        <div className={styles.containerIntro}>
        <div >
        <Image
              src="/images/anyapadoru.png"
              alt="Placeholder preview of starter"
              width={225}
              height={300}
            />

        </div>
        <div className={styles.intro}>
        I am PADORU, the cryptocurrency that lights up the magic of Christmas all year round. Inspired by the iconic Padoru meme, I am a constant reminder of joy, a bond that brings hearts together, and a symbol of unbridled fun. In my crypto world, every day is a Christmas celebration, where laughter and community are our greatest treasures. Join me and embrace the essence of Christmas at any time of the year. Padoru Padoru, the fun never ends!
        </div>
        <div >
        <Image
              src="/images/papapadoru.png"
              alt="Placeholder preview of starter"
              width={225}
              height={300}
            />

        </div>

      </div>
      <p></p>
      <div className={styles.containerIntro}>
      <div className={styles.imageIntroL}>
        <Image
              src="/images/treeleft.png"
              alt="Placeholder preview of starter"
              width={225}
              height={300}
            />

        </div>
      <div className={styles.introR}>
        Roadmap

      </div>
      <div className={styles.imageIntroR}>
        <Image
              src="/images/treeright.png"
              alt="Placeholder preview of starter"
              width={225}
              height={300}
            />

        </div>
        </div>

        <div className={styles.containerIntro}>
        <div >
        <Image
              src="/images/roadmap1.png"
              alt="Placeholder preview of starter"
              width={495}
              height={660}
            />

        </div>
        <div >
        <Image
              src="/images/roadmap2.png"
              alt="Placeholder preview of starter"
              width={495}
              height={660}
            />

        </div>
        <div >
        <Image
              src="/images/roadmap3.png"
              alt="Placeholder preview of starter"
              width={495}
              height={660}
            />

        </div>

      </div>

      <div className={styles.containerIntro}>
      <div className={styles.introT}>Tokenomics</div>
      </div>
      <div className={styles.descriptionT}>
            <p>The price list will be 1.5$!. Get you investment receive 50% value since the start!</p>
      </div>
      <div className={styles.imageT}>
      <div >
        <Image
              src="/images/Tanjiro.png"
              alt="Placeholder preview of starter"
              width={225}
              height={300}
            />

        </div>

      <div className={styles.imageIntroT}>
      <Image
              src="/images/tokenomics.png"
              alt="Placeholder preview of starter"
              
              width={900}
              height={900}
              style={
                {
                  border: '10px solid green',
                  borderRadius: '50px',
                }
              }
            />
        
      </div>
      <div >
        <Image
              src="/images/Nezuko.png"
              alt="Placeholder preview of starter"
              width={225}
              height={300}
            />

        </div>
        </div>










      </div>
      
    </main>
  );
}
