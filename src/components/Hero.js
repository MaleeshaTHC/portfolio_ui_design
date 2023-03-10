import "../style/Hero.css";
export default function Hero() {
  return (
    <div>
      <p>discover and</p>
      <p>collect <span>rare</span></p>
      <p>NFTs</p>

      <div>
      <p>The most accurate marketplace for buying and selling unique crypto assets.</p> 
      </div>

      <div>
        <button class="button_button1">BUY NFTS</button>
        <button class="button_button2">SELL NFTS</button>
      </div>

      <div>       
        <img id="myImg" src="../assets/nfthero.jpg" alt="NFT"></img>
      </div>
    </div>
  );
}