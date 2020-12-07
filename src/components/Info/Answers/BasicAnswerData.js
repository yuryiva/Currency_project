import "./BasicAnswerData.css";

export const BasicAnswerData = () => (
  <div className="text">
    <div className='headers'>What is Bitcoin Mining?</div>
    <p>
      Cryptocurrency mining is painstaking, costly, and only sporadically
      rewarding. Nonetheless, mining has a magnetic appeal for many investors
      interested in cryptocurrency because of the fact that miners are rewarded
      for their work with crypto tokens. This may be because entrepreneurial
      types see mining as pennies from heaven, like California gold prospectors
      in 1849. And if you are technologically inclined, why not do it?
    </p>
    <div className='headers'>KEY TAKEAWAYS:</div>
    <ul>
      <li>
        By mining, you can earn cryptocurrency without having to put down money
        for it.
      </li>
      <li>
        Bitcoin miners receive Bitcoin as a reward for completing "blocks" of
        verified transactions which are added to the blockchain.
      </li>
      <li>
        Mining rewards are paid to the miner who discovers a solution to a
        complex hashing puzzle first, and the probability that a participant
        will be the one to discover the solution is related to the portion of
        the total mining power on the network.
      </li>
      <li>
        You need either a GPU (graphics processing unit) or an
        application-specific integrated circuit (ASIC) in order to set up a
        mining rig.
      </li>
    </ul>
    <br />
    <p>
      However, before you invest the time and equipment, read this explainer to
      see whether mining is really for you. We will focus primarily on Bitcoin
      (throughout, we'll use "Bitcoin" when referring to the network or the
      cryptocurrency as a concept, and "bitcoin" when we're referring to a
      quantity of individual tokens).
    </p>
    <br />
    The primary draw for many mining is the prospect of being rewarded with
    Bitcoin. That said, you certainly don't have to be a miner to own
    cryptocurrency tokens. You can also buy cryptocurrencies using fiat
    currency; you can trade it on an exchange like Bitstamp using another crypto
    (as an example, using Ethereum or NEO to buy Bitcoin); you even can earn it
    by shopping, publishing blog posts on platforms that pay users in
    cryptocurrency, or even set up interest-earning crypto accounts. An example
    of a crypto blog platform is Steemit, which is kind of like Medium except
    that users can reward bloggers by paying them in a proprietary
    cryptocurrency called STEEM. STEEM can then be traded elsewhere for Bitcoin.
    The Bitcoin reward that miners receive is an incentive that motivates people
    to assist in the primary purpose of mining: to legitimize and monitor
    Bitcoin transactions, ensuring their validity. Because these
    responsibilities are spread among many users all over the world, Bitcoin is
    a "decentralized" cryptocurrency, or one that does not rely on any central
    authority like a central bank or government to oversee its regulation.
    <br />
    <br />
    <h3>
      <b>How To Mine Bitcoins</b>
    </h3>
    <br />
    Miners are getting paid for their work as auditors. They are doing the work
    of verifying the legitimacy of Bitcoin transactions. This convention is
    meant to keep Bitcoin users honest and was conceived by bitcoin's founder,
    Satoshi Nakamoto. By verifying transactions, miners are helping to prevent
    the "double-spending problem."
    <p>
      Double spending is a scenario in which a bitcoin owner illicitly spends
      the same bitcoin twice. With physical currency, this isn't an issue: once
      you hand someone a $20 bill to buy a bottle of vodka, you no longer have
      it, so there's no danger you could use that same $20 bill to buy lotto
      tickets next door. While there is the possibility of counterfeit cash
      being made, it is not exactly the same as literally spending the same
      dollar twice. With digital currency, however, as the Investopedia
      dictionary explains, "there is a risk that the holder could make a copy of
      the digital token and send it to a merchant or another party while
      retaining the original."
    </p>
    <p>
      Let's say you had one legitimate $20 bill and one counterfeit of that same
      $20. If you were to try to spend both the real bill and the fake one,
      someone that took the trouble of looking at both of the bills' serial
      numbers would see that they were the same number, and thus one of them had
      to be false. What a Bitcoin miner does is analogous to that—they check
      transactions to make sure that users have not illegitimately tried to
      spend the same bitcoin twice. This isn't a perfect analogy—we'll explain
      in more detail below.
    </p>
    Once miners have verified 1 MB (megabyte) worth of bitcoin transactions,
    known as a "block," those miners are eligible to be rewarded with a quantity
    of bitcoin (more about the bitcoin reward below as well). The 1 MB limit was
    set by Satoshi Nakamoto, and is a matter of controversy, as some miners
    believe the block size should be increased to accommodate more data, which
    would effectively mean that the bitcoin network could process and verify
    transactions more quickly.
    <p>
      Note that verifying 1 MB worth of transactions makes a coin miner eligible
      to earn bitcoin—not everyone who verifies transactions will get paid out.
    </p>
    <p>
      1MB of transactions can theoretically be as small as one transaction
      (though this is not at all common) or several thousand. It depends on how
      much data the transactions take up.
    </p>
    <br />
    <h3>What Do I Need To Mine Bitcoins?</h3>
    <br />
    <p>
      Although early on in Bitcoin's history individuals may have been able to
      compete for blocks with a regular at-home computer, this is no longer the
      case. The reason for this is that the difficulty of mining Bitcoin changes
      over time. In order to ensure the smooth functioning of the blockchain and
      its ability to process and verify transactions, the Bitcoin network aims
      to have one block produced every 10 minutes or so. However, if there are
      one million mining rigs competing to solve the hash problem, they'll
      likely reach a solution faster than a scenario in which 10 mining rigs are
      working on the same problem. For that reason, Bitcoin is designed to
      evaluate and adjust the difficulty of mining every 2,016 blocks, or
      roughly every two weeks. When there is more computing power collectively
      working to mine for Bitcoin, the difficulty level of mining increases in
      order to keep block production at a stable rate. Less computing power
      means the difficulty level decreases. To get a sense of just how much
      computing power is involved, when Bitcoin launched in 2009 the initial
      difficulty level was one. As of Nov. 2019, it is more than 13 trillion.
    </p>
    <br />
    All of this is to say that, in order to mine competitively, miners must now
    invest in powerful computer equipment like a GPU (graphics processing unit)
    or, more realistically, an application-specific integrated circuit (ASIC).
    These can run from $500 to the tens of thousands. Some miners—particularly
    Ethereum miners—buy individual graphics cards (GPUs) as a low-cost way to
    cobble together mining operations. The photo below is a makeshift, home-made
    mining machine. The graphics cards are those rectangular blocks with
    whirring fans. Note the sandwich twist-ties holding the graphics cards to
    the metal pole. This is probably not the most efficient way to mine, and as
    you can guess, many miners are in it as much for the fun and challenge as
    for the money.
  </div>
);
