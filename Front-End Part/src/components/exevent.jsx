import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Papa from 'papaparse';

// الأحداث واختصاراتها
const events = [
  { key: 'Dotcom', label: 'Dot-Com Bubble', year: 2001, start: '2001-03-01', end: '2001-09-01' },
  { key: '9_11', label: '9/11 Attacks', year: 2001, start: '2001-09-01', end: '2001-12-01' },
  { key: 'IraqWar', label: 'Iraq War', year: 2003, start: '2003-01-01', end: '2003-06-01' },
  { key: 'GFC', label: 'Global Financial Crisis', year: 2008, start: '2008-09-01', end: '2009-03-01' },
  { key: 'DebtCrisis', label: 'Euro Debt Crisis', year: 2011, start: '2011-05-01', end: '2011-09-01' },
  { key: 'Brexit', label: 'Brexit Vote', year: 2016, start: '2016-06-01', end: '2016-09-01' },
  { key: 'Trump', label: 'Trump Election', year: 2016, start: '2016-11-01', end: '2017-03-01' },
  { key: 'COVID', label: 'COVID-19', year: 2020, start: '2020-03-01', end: '2020-12-01' },
  { key: 'Ukraine', label: 'Ukraine War', year: 2022, start: '2022-02-01', end: '2022-08-01' },
  { key: 'Inflation', label: 'High Inflation', year: 2022, start: '2022-06-01', end: '2023-01-01' },
  { key: 'FedRates', label: 'Fed Rate Hikes', year: 2023, start: '2023-02-01', end: '2023-08-01' },
  { key: 'Gaza', label: 'Gaza Conflict', year: 2023, start: '2023-10-01', end: '2024-02-01' },
];

const Exevent = ({
  chartTitle = "Gold Price Trend",
  dataFile = "/gold_close.csv",
  priceColumn = "Gold",
}) => {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [highlightRange, setHighlightRange] = useState({ start: '', end: '' });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null); // لحفظ الزر المختار

  useEffect(() => {
    fetch(dataFile)
      .then((res) => res.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            const parsedData = result.data
              .map((d) => ({
                date: d.Date,
                price: d[priceColumn],
              }))
              .filter((d) => d.date && !isNaN(d.price));

            setFullData(parsedData);
            setFilteredData(parsedData);
          },
        });
      });
  }, [dataFile, priceColumn]);

  const handleEventClick = (event) => {
    const newData = fullData.filter(d => d.date >= event.start && d.date <= event.end);
    setFilteredData(newData);
    setHighlightRange({ start: event.start, end: event.end });
    setSelectedEvent(event);
    setSelectedButton(event.key); // تحديث الزر المختار
  };

  // switch statement لعرض المقالات مباشرة داخل الـ switch
  const renderArticle = () => {
    switch (selectedEvent?.key) {
      case 'Dotcom':
        return (
          <p className='article'>
            The Dot-Com Bubble was one of the most dramatic events in the history of global financial markets, characterized by excessive speculation in internet-based companies.<br/> The bubble was fueled by the widespread belief that the internet would revolutionize business and the global economy.<br/> During the late 1990s and early 2000s, internet startups with little to no profits were valued at billions of dollars, despite their questionable business models and lack of solid revenue streams.<br/>

The late 1990s saw a surge in initial public offerings (IPOs) of companies associated with the internet.<br/> Investors, swept up in the optimism surrounding new technology, poured money into companies with ".com" in their names. Stocks like Amazon, eBay, and Yahoo saw massive rises in their stock prices, even as their earnings did not justify the valuation.<br/> By the year 2000, the NASDAQ composite, a stock market index heavily weighted with tech stocks, had increased by about 800% from 1995, reaching a peak of 5,048.62 in March 2000.<br/>

However, by the time the bubble burst, the situation dramatically reversed.<br/> The tech companies were unable to meet investors' sky-high expectations, and many started to fall short of their projected profits.<br/> The result was catastrophic: billions of dollars of market value were wiped out.<br/> By October 2002, the NASDAQ had plunged by approximately 78%, erasing all of its earlier gains. <br/>This collapse also impacted many venture capital firms, which had bet heavily on the tech sector. Several internet-based companies, such as Pets.com and Webvan, declared bankruptcy, and a large portion of internet companies ceased to exist.<br/><br />

<h3><b>Impact on Gold:</b></h3><br/>
Although the collapse of the Dot-Com Bubble was a significant financial event, the effect on gold prices was somewhat muted during the initial stages. Investors were still largely confident in the stock market and traditional investments at the time.<br/> The bubble burst did, however, highlight the risks of speculative investments, and many investors began to question the long-term sustainability of growth driven purely by speculation and hype.<br/> Gold, traditionally a safe-haven asset, did not immediately benefit from this crisis.<br/>

During the years leading up to the bursting of the Dot-Com Bubble, gold prices remained relatively flat. The primary reason for this was the strength of the U.S. dollar and relatively high interest rates at the time. A strong dollar made gold less attractive as an alternative investment, while high interest rates offered better returns in government bonds and other fixed-income securities. This environment resulted in investors’ preference for riskier, yet higher-return investments like tech stocks, over safer assets like gold.<br/>

However, as the bubble burst, a shift began to take place. The dot-com collapse led to a significant downturn in the stock market, which raised concerns about broader economic stability. In response, central banks around the world began to lower interest rates to stimulate economic growth. This monetary policy, aimed at countering the effects of the recession, started to make gold more attractive.<br/> As the value of the U.S. dollar weakened, the appeal of gold as a hedge against potential currency devaluation grew.<br/> Even though gold prices did not soar immediately after the crash, investors started to recognize gold as a more stable investment during uncertain times. <br /> <br />

<h3><b>Conclusion:</b></h3><br/>
The Dot-Com Bubble burst in 2000 marked a major turning point in global financial markets.<br/> While gold did not initially see a significant surge in prices, the eventual downturn in the stock market and the subsequent monetary policies adopted by central banks around the world set the stage for gold to gain traction as a safe-haven asset. The rise of gold in the years following the Dot-Com Bubble is a testament to the increasing importance of diversifying investments and hedging against systemic risks.<br/> Though gold did not rise dramatically during the bubble itself, the period following its collapse demonstrated how critical gold can
          </p>
        );
      case '9_11':
        return (
          <p className='article'>


The September 11, 2001 terrorist attacks on the United States were a defining moment in modern history, leading to profound changes in the global geopolitical landscape, national security policies, and economic systems. On that tragic day, al-Qaeda terrorists hijacked four commercial airplanes, crashing two into the World Trade Center towers in New York City, one into the Pentagon in Washington, D.C., and the fourth, United Airlines Flight 93, into a field in Pennsylvania after passengers attempted to regain control. <br /> Nearly 3,000 people lost their lives in the attacks, making it the deadliest terrorist act in U.S. history.<br />

In the immediate aftermath, the U.S. stock market experienced a sharp decline.<br /> The market remained closed for several days, and when it reopened, the Dow Jones Industrial Average dropped by more than 7% on the first trading day.<br /> The attacks also led to global economic uncertainty, with investors fearing the potential economic and political ramifications of this unprecedented act of terrorism.<br />
In response to the attacks, the U.S. government implemented a series of policies aimed at securing the nation and its economy. <br />These included increased military operations, such as the War on Terror, and the establishment of the Department of Homeland Security. <br />The U.S. also pushed for international cooperation to combat terrorism, which included military intervention in Afghanistan to dismantle al-Qaeda and remove the Taliban regime that had been harboring the terrorist group.<br />
<br /><br />
<h3>Impact on Gold:</h3> <br />
The September 11 attacks immediately triggered a flight to safety, with investors seeking assets that were perceived as less risky in the face of geopolitical instability. Gold, as a traditional safe-haven asset, saw a brief surge in price as uncertainty mounted in the wake of the attacks.<br />

In the days following the attacks, gold prices rose sharply.<br /> Investors were increasingly concerned about the potential for further attacks and the broader implications of such an unprecedented event on the global economy. Gold’s role as a safe-haven asset became even more pronounced, as markets feared that the events would lead to wider economic disruptions, particularly in terms of oil prices, global trade, and the stability of financial institutions.<br />

However, the gold price spike following September 11 was relatively short-lived.<br /> Although the immediate aftermath of the attacks caused a surge in demand for gold, investors' attention quickly shifted to other financial factors, such as the Federal Reserve’s monetary policy response and the U.S. government's efforts to stabilize the economy.<br /> By the end of 2001, gold prices had stabilized and returned to pre-attack levels, as markets began to absorb the news and adjust to the new geopolitical landscape.<br />

Despite this temporary reversal, the September 11 attacks left an indelible mark on investor sentiment.<br /> Over the long term, they reinforced gold's position as a safe-haven asset during times of geopolitical and economic crisis. <br />Investors continued to recognize gold as a reliable hedge against uncertainty, and this trend would play a significant role in gold's price movements in the years to come.<br />
<br />
<h3>Conclusion:</h3> <br />
The September 11 attacks of 2001 were a pivotal moment in both global history and financial markets. <br /> In the immediate aftermath, gold prices spiked as investors sought a safe-haven asset in the face of heightened geopolitical and economic uncertainty. However, the effect was short-lived, and gold prices soon returned to thei
          </p>
        );
      case 'IraqWar':
        return (
          <p className='article'>
           The Iraq War, also known as the Second Gulf War, began in 2003 with the invasion of Iraq by the United States and a coalition of allies. <br /> The invasion was based on the premise that Iraq's regime, led by President Saddam Hussein, possessed weapons of mass destruction (WMDs) and had links to terrorist organizations such as al-Qaeda. <br /> Despite the lack of conclusive evidence of such weapons, the U.S. government, led by President George W. Bush, argued that military intervention was necessary to protect national and international security.<br />

The invasion was swift, with U.S. forces capturing Baghdad and toppling Saddam Hussein's regime within weeks. However, the subsequent occupation of Iraq proved to be far more complex.<br /> The Iraq War led to significant instability in the region, with sectarian violence, insurgencies, and the rise of extremist groups such as ISIS. The war had far-reaching geopolitical consequences, including a prolonged U.S. military presence in Iraq, shifting alliances in the Middle East, and significant regional instability.<br />
<br />
<h3>Impact on Gold:</h3> <br />
The onset of the Iraq War in 2003 resulted in a temporary increase in gold prices. <br />The initial invasion created significant geopolitical instability, which led to heightened uncertainty about the future of the region and the broader global economy.<br /> Gold, once again, found its role as a safe-haven asset in times of crisis, with investors seeking to protect their portfolios from the potential economic fallout of the war.<br />

In the early stages of the conflict, gold prices saw modest gains, reflecting increased demand for safe assets.<br /> As the war dragged on and uncertainties about the outcome grew, gold prices began to climb more substantially. <br />From 2003 to 2008, gold prices entered a bull market, fueled by concerns over the financial and human costs of the war.<br /> The conflict further destabilized the Middle East, adding to concerns about oil prices and the broader global economic environment.<br /> As a result, gold began to attract more investor interest, with its traditional role as a store of value becoming even more important.<br />

The war also contributed to the weakening of the U.S. dollar, as the costs of military intervention and reconstruction efforts drained U.S. resources. This further boosted the attractiveness of gold, as a weaker dollar typically leads to higher gold prices. <br />By 2008, as the global financial crisis was unfolding, gold prices had surged to new highs, reflecting both the ongoing geopolitical tensions in Iraq and the broader global economic instability.<br /><br />

<h3>Conclusion:</h3> <br />
The Iraq War played a significant role in shaping gold's performance in the 2000s.<br /> While the initial invasion in 2003 led to a modest increase in gold prices, the prolonged conflict and resulting instability in the Middle East fueled a more substantial rise in gold prices over the following years.<br /> As the war continued and uncertainties about the region's stability persisted, gold became a key safe-haven asset for investors, further cementing its status as a store of value during times of geopolitical turmoil.<br /> The Iraq War was one of several key events in the 2000s that highlighted gold’s importance as a hedge against risk and instability, a trend that would continue in future crises.
          </p>
        );
      case 'GFC':
        return (
          <p className='article'>
           The Global Financial Crisis (GFC) of 2008 was one of the most severe global economic downturns since the Great Depression. It was triggered by the collapse of the housing market in the United States, specifically the bursting of the housing bubble and the subsequent subprime mortgage crisis. <br /> As housing prices
           The value of mortgage-backed securities, which were tied to these loans, also dropped, leading to massive losses for banks and financial institutions. <br />
  The crisis quickly spread from the U.S. to global markets, resulting in widespread financial instability. <br />
  Major financial institutions, including Lehman Brothers, Bear Stearns, and AIG, either failed or were bailed out by governments. <br />
  The stock market crashed, and unemployment rates soared. <br />
  Governments and central banks around the world responded with unprecedented monetary and fiscal measures, including large-scale bailouts, interest rate cuts, and quantitative easing programs. <br />

  <strong>Impact on Gold:</strong> <br />
  During the early stages of the GFC, gold prices initially dipped as investors scrambled to liquidate assets and raise cash. <br />
  However, as central banks around the world slashed interest rates and injected liquidity into the financial system through quantitative easing, gold began to gain in appeal as a hedge against inflation and currency devaluation. <br />

  The financial crisis led to a massive expansion of central bank balance sheets, particularly the U.S. Federal Reserve, which took aggressive action to prevent further economic collapse. <br />
  This loose monetary policy led to fears of long-term inflation, making gold an attractive alternative investment. <br />
  Additionally, the global economic downturn weakened confidence in paper currencies, particularly the U.S. dollar, which traditionally held a strong position in global markets. <br />

  By the end of 2008, gold prices had begun to rise, and they continued their upward trajectory throughout the following years, reaching new highs. <br />
  As investors sought safety from the collapsing financial system, gold became a refuge, rising to nearly $1,000 per ounce by 2009. <br />
  The crisis reaffirmed gold’s role as a store of value during times of economic uncertainty. <br />

  <strong>Conclusion:</strong> <br />
  The Global Financial Crisis of 2008 marked a pivotal moment for gold, transforming it into one of the most sought-after assets in the wake of the economic turmoil. <br />
  While gold initially faced a brief decline as investors scrambled for liquidity, it soon surged in response to central bank policies and the growing realization that the financial system was in deep trouble. <br />
  The crisis highlighted the importance of gold as a hedge against inflation and currency risks, and its performance during the GFC reinforced its status as a safe-haven asset. <br />
          </p>
        );
      case 'DebtCrisis':
        return (
          <p className='article'>
           The Eurozone Debt Crisis was a sovereign debt crisis that primarily affected several European countries, including Greece, Spain, Portugal, and Italy, and threatened the stability of the euro and the European Union itself. <br /> The crisis began in late 2009 when Greece revealed that its budget deficit was much higher than previously reported, leading to fears about the country’s ability to meet its debt obligations.<br /> This sparked panic in financial markets, and the debt problems spread to other countries in the Eurozone, most notably those with high debt-to-GDP ratios.<br />
The European Central Bank (ECB), the European Union (EU), and the International Monetary Fund (IMF) intervened with bailout packages for Greece and other countries in exchange for implementing austerity measures.<br /> The crisis raised questions about the future of the euro and the structural integrity of the European Union, and it sparked widespread protests and social unrest in affected countries.<br /> By 2012, the crisis showed signs of stabilization, but not before shaking the confidence of investors and the public in the ability of Eurozone nations to manage their economies.<br />
<br />
<h3>Impact on Gold:</h3> <br />
As the Eurozone Debt Crisis unfolded, gold prices began to climb as investors looked for safe-haven assets amidst fears of sovereign defaults and economic instability in Europe. <br /> The crisis heightened concerns about the stability of the euro, with some investors speculating that some member countries might abandon the currency or face bankruptcy. <br />
Gold tradi tionally serves as a hedge against financial instability and inflation, and during the Eurozone Debt Crisis, it performed this role exceptionally well.<br /> As the value of the euro fluctuated and the possibility of sovereign defaults loomed large, demand for gold increased, driving prices higher.<br />

In particular, during the most intense periods of the crisis, such as in 2010 and 2011, gold prices surged as market participants sought refuge from the uncertainty surrounding the fate of the European Union. The economic instability, combined with the fear of inflation and currency devaluation, made gold an attractive investment. By 2011, gold prices reached historic highs, with the price of gold per ounce exceeding $1,900 in the wake of ongoing concerns about the sustainability of European economies.<br />

The gold rally was further supported by the actions of central banks, particularly the European Central Bank (ECB), which lowered interest rates and engaged in other monetary easing measures to stabilize the Eurozone. Lower interest rates generally reduce the opportunity cost of holding gold, making it more attractive to investors seeking to hedge against currency devaluation.
<br /><br />
<h3>conclusion:</h3> <br />
The Eurozone Debt Crisis was a pivotal event for the gold market, as it highlighted the importance of safe-haven assets during times of financial uncertainty. Gold prices saw significant gains during the crisis as investors sought refuge from the economic instability and the potential collapse of the euro.<br /> The crisis solidified gold’s reputation as a store of value during periods of sovereign debt stress, and its performance during this time reinforced its role as a hedge against the risks of inflation, currency devaluation, and financial instability.
          </p>
        );
      case 'Brexit':
      return (
  <p className='article'>
    In June 2016, the United Kingdom held a referendum on whether to remain in the European Union (EU) or leave, a decision that became known as "Brexit." The referendum result was a shock to the political establishment: 51.9% of voters opted for leaving the EU, while 48.1% voted to remain. The immediate aftermath of the referendum saw political and economic uncertainty, as the UK and EU would now need to negotiate a withdrawal agreement, and the implications of the decision on trade, immigration, and the economy remained unclear. <br />

    The Brexit vote caused turmoil in the financial markets, with the British pound experiencing its sharpest decline in history against the U.S. dollar. Global stock markets also reacted negatively, reflecting the uncertainties surrounding the UK’s future relationship with the EU. Prime Minister David Cameron resigned, and a new leadership took over in the UK, tasked with navigating the complex and contentious process of exiting the EU.
<br /><br />
   <h3>Impact on Gold:</h3> <br />
    The Brexit referendum had an immediate and significant impact on gold prices. Following the referendum result, gold prices spiked, reflecting increased demand for safe-haven assets amidst the heightened uncertainty about the UK’s future in the EU. Investors were concerned about the potential economic and political ramifications of Brexit, including the possibility of a decline in the UK’s economic growth, disruption in trade relations, and broader global economic consequences. <br />

    The British pound’s dramatic decline after the referendum further boosted gold’s appeal as a store of value. As the value of the pound fell, the price of gold in pounds surged, making gold an attractive investment for those seeking to hedge against currency risk.<br /> The volatility in the currency markets and the broader economic uncertainty surrounding Brexit reinforced gold's role as a safe-haven asset during times of geopolitical and economic crisis. <br />

    Throughout the Brexit negotiations and the uncertainty about the eventual outcome, gold prices continued to fluctuate. <br />However, the overall trend was upward, as concerns about the potential for economic instability in the UK and Europe persisted.<br /> By the time the UK formally left the EU in January 2020, gold had solidified its position as a key asset for investors seeking. <br /><br /><h3>Conclusion:</h3> <br />
The Brexit referendum of 2016 marked a critical moment in both European and global politics, with far-reaching implications for the UK, the EU, and the global economy. Gold prices experienced a sharp increase immediately following the referendum result, driven by heightened demand for safe-haven assets. The Brexit vote reaffirmed gold’s role as a refuge during times of political and economic uncertainty, especially when significant changes in geopolitical landscapes occur.<br /> The volatility in the British pound and the continued uncertainty surrounding the Brexit process further contributed to gold’s rise, underscoring its importance as a hedge against currency risk and global instability.
  </p>
);

      case 'Trump':
        return (
          <p className='article'>
            The U.S. presidential election of 2016 was one of the most contentious and surprising elections in modern American history. <br />
  The contest was between the Republican candidate Donald Trump, a businessman and reality TV star with no prior political experience, and the Democratic candidate Hillary Clinton, a former Secretary of State and U.S. Senator. <br />
  Trump’s unconventional campaign and populist rhetoric led to a polarized electorate, and many pundits and analysts did not expect him to win. <br />

  Despite the odds, Trump secured an Electoral College victory, defeating Clinton by a narrow margin in several key battleground states. <br />
  The election result was a shock to the political establishment, and it raised significant concerns about the direction of U.S. economic policies, including trade, taxes, and regulatory reforms. <br />

  The uncertainty surrounding Trump’s economic agenda, as well as concerns about his ability to govern effectively, led to volatility in financial markets in the lead-up to the election and in its aftermath. <br />
  Trump's victory created a period of adjustment, as investors tried to gauge the potential impact of his policies on the economy and financial markets. <br />

  <br /><h3>Impact on Gold: </h3> <br />
  Gold prices initially rose following Donald Trump's unexpected victory in the 2016 U.S. presidential election. <br />
  The uncertainty surrounding his proposed economic policies, particularly on issues such as trade protectionism, taxation, and deregulation, prompted investors to seek safe-haven assets like gold. <br />
  As concerns over his ability to enact his agenda grew, gold gained appeal as a store of value amid fears that his policies could lead to increased volatility in the stock markets and the broader economy. <br />

  However, the rise in gold prices was short-lived. <br />
  As Trump’s administration took office and began to implement pro-growth policies such as tax cuts and deregulation, investor sentiment shifted. <br />
  The anticipation of stronger economic growth led to a stronger U.S. dollar and rising equity markets, both of which made gold less attractive. <br />
  Gold prices subsequently fell as investors became more optimistic about the potential for economic expansion under Trump’s leadership. <br />

  Despite this decline, gold’s role as a safe-haven asset remained intact. <br />
  The election and its aftermath underscored the importance of gold in times of political uncertainty and economic transition. <br />
  Gold’s performance during this period highlighted its ability to serve as a hedge against market volatility and the risks posed by uncertain political environments. <br />

  <br /><h3>Conclusion: </h3> <br />
  The U.S. presidential election of 2016 had a notable impact on gold prices, with the initial uncertainty surrounding Donald Trump’s victory driving a temporary increase in demand for gold. <br />
  However, as his pro-growth policies gained traction and investor confidence in the U.S. economy grew, gold prices reversed course. <br />
  The election reinforced gold’s role as a safe-haven asset during periods of political uncertainty and underscored its importance as a hedge against volatility in financial markets. <br />
          </p>
        );
      case 'COVID':
        return (
          <p className='article'>
           The COVID-19 pandemic, which emerged in late 2019 and rapidly spread across the globe in 2020,
          
  The COVID-19 pandemic is one of the most disruptive events in modern history. <br />
  Initially originating in Wuhan, China, the virus caused severe health crises worldwide, with millions of cases and deaths. <br />
  Governments across the world implemented widespread lockdowns, travel restrictions, and social distancing measures in a bid to contain the virus’s spread. <br />
  The economic fallout from the pandemic was equally severe, as businesses shuttered, industries came to a halt, and unemployment surged. <br />

  In response to the crisis, central banks, including the Federal Reserve, implemented massive fiscal and monetary interventions, such as slashing interest rates to near zero and injecting trillions of dollars into the global economy through stimulus packages. <br />
  Despite these efforts, the global economy faced a sharp contraction, with many countries entering recessions and experiencing unprecedented levels of economic uncertainty. <br />

  Simultaneously, the stock markets experienced volatility, with major indices like the S&P 500 and Dow Jones suffering steep declines in the early months of the pandemic. <br />
  However, as governments and central banks responded with liquidity measures, the markets recovered, albeit slowly. <br />

  <br /><h3>Impact on Gold:</h3> <br />
  The COVID-19 pandemic had a profound and immediate impact on the gold market. <br />
  As the pandemic unfolded and uncertainty skyrocketed, gold prices surged to record highs. <br />
  Gold is traditionally viewed as a safe-haven asset during times of crisis, and the global scale of the pandemic triggered a flight to safety. <br />

  The initial phase of the pandemic in early 2020 saw a significant rise in gold prices as investors sought refuge from the market turbulence and fears of economic collapse. <br />
  The demand for safe-haven assets, particularly gold, increased sharply, as investors looked for ways to preserve their wealth amidst concerns about inflation, currency devaluation, and the long-term economic impacts of the pandemic. <br />

  As central banks around the world slashed interest rates and implemented unprecedented levels of monetary stimulus to mitigate the effects of the pandemic, the appeal of gold increased further. <br />
  Gold does not yield interest like bonds or dividends from stocks, so when interest rates are low or negative, gold becomes an attractive option for investors seeking to preserve capital and protect against currency devaluation. <br />
  The U.S. Federal Reserve's announcement of massive economic stimulus packages further supported gold's rise as the global financial system entered uncharted territory. <br />

  In August 2020, gold reached an all-time high of over $2,000 per ounce, driven by the combination of economic uncertainty, massive government spending, and the perception that inflation could eventually rise as a result of all the fiscal interventions. <br />
  The surge in gold prices reflected not only fears of inflation but also concerns about the long-term stability of global financial markets. <br />

  <br /><h3>Conclusion:</h3> <br />
  The COVID-19 pandemic had a dramatic effect on gold prices, pushing them to record highs as investors turned to the precious metal as a safe-haven asset amid the global health crisis and economic uncertainty. <br />
  The combination of a global recession, fiscal stimulus, low interest rates, and fears of inflation created the ideal conditions for gold to perform well. <br />
  The pandemic reaffirmed gold’s role as a store of value in times of crisis, cementing its place as one of the most sought-after assets during periods of global uncertainty. <br />
          </p>
        );
      case 'Ukraine':
        return (
          <p className='article'>
           In February 2022, Russia launched a full-scale invasion of Ukraine, escalating a conflict that had been simmering since Russia annexed Crimea in 2014. <br /> The invasion marked a significant geopolitical shift, leading to widespread condemnation from the international community. In response, the United States, the European Union, and other countries imposed sweeping economic sanctions on Russia, targeting sectors such as banking, energy, and military exports. <br /> The conflict led to thousands of deaths, the displacement of millions of people, and severe damage to Ukraine’s infrastructure. <br />
           he invasion not only destabilized the region but also caused global disruptions, particularly in energy markets. <br />
  Russia is a major supplier of oil and natural gas to Europe, and the war led to soaring energy prices and concerns about the future of European energy security. <br />
  The war also exacerbated existing supply chain issues that had been worsened by the COVID-19 pandemic, leading to rising food prices and further inflationary pressures worldwide. <br />

  The conflict raised fears of a broader European war, drawing comparisons to past world wars. <br />
  The uncertainty surrounding the geopolitical and economic implications of the war created volatility in global markets, leading to heightened demand for safe-haven assets like gold. <br />

  <strong>Impact on Gold:</strong> <br />
  The Russia-Ukraine conflict had an immediate impact on gold prices, as the geopolitical tensions and the global economic fallout from the war triggered increased demand for safe-haven assets. <br />
  Gold prices surged in early 2022, reflecting investor anxiety about the war’s potential to escalate further and its broader implications for global markets. <br />

  Gold is traditionally seen as a hedge against geopolitical risk, and the invasion of Ukraine sent shockwaves through financial markets. <br />
  As the conflict intensified, gold became increasingly attractive to investors seeking to preserve wealth in the face of mounting uncertainty. <br />
  The U.S. dollar, while benefiting from its safe-haven status, saw fluctuations as markets responded to the conflict, further bolstering gold’s appeal as a hedge against currency risks. <br />

  While gold’s price gains moderated as markets adjusted to the ongoing situation, it remained a critical asset for investors worried about the potential for further escalation of the conflict. <br />
  The Russia-Ukraine war underscored gold’s role as a refuge during periods of extreme geopolitical uncertainty and global instability. <br />

  <strong>Conclusion:</strong> <br />
  The Russia-Ukraine conflict had a significant impact on gold prices, with the initial surge in prices driven by fears of a broader geopolitical crisis and its impact on global markets. <br />
  Gold's role as a safe-haven asset during times of conflict and instability was reaffirmed during this period, as investors sought to mitigate risks associated with the war’s economic and geopolitical fallout. <br />
  The ongoing nature of the conflict and the potential for further escalation made gold an attractive investment during this period of heightened global uncertainty. <br />
          </p>
        );
      case 'Inflation':
        return (
          <p className='article'>
           In 2022, many economies around the world, particularly in the United States and Europe, faced the highest levels of inflation seen in decades. <br />
  This was driven by several factors, including supply chain disruptions, rising energy prices, and increased demand following the COVID-19 pandemic. <br />
  Governments and central banks had implemented massive stimulus measures during the pandemic, and as economies began to recover, the result was a surge in demand coupled with a shortage of supply, which fueled inflation. <br />

  In addition, the war in Ukraine significantly impacted global energy markets, driving up the prices of oil and natural gas. <br />
  These higher energy prices had a knock-on effect on food and transportation costs, further contributing to inflationary pressures. <br />
  Central banks, particularly the U.S. Federal Reserve, responded by raising interest rates to combat rising inflation. <br />

  Inflation reached its peak in many countries in 2022, causing concerns about the purchasing power of consumers, the stability of economies, and the potential for a prolonged period of rising prices. <br />

  <strong>Impact on Gold:</strong> <br />
  Gold has long been considered a hedge against inflation, and its performance in 2022 reflected this role. <br />
  Typically, when inflation rises, the value of fiat currencies erodes, and gold becomes more attractive as a store of value. <br />
  However, in 2022, gold’s performance was mixed, despite inflation reaching high levels. <br />

  While gold did see some upward movement during the initial stages of inflation, the strong U.S. dollar and rising interest rates—key tools used by the Federal Reserve to combat inflation—dampened gold’s gains. <br />
  had a dampening effect on gold prices. <br />
  Higher interest rates reduce the appeal of non-yielding assets like gold, as investors can earn higher returns from bonds and other interest-bearing assets. <br />

  That said, gold remained a popular asset for investors looking for protection against inflation and currency devaluation. <br />
  The price of gold was buoyed by the general sense of economic uncertainty and fears that the central banks’ efforts to tackle inflation might not be sufficient to avoid a recession. <br />
  As inflation continued to run high, gold retained its position as a hedge against the purchasing power erosion caused by rising prices. <br />

  <strong>Conclusion:</strong> <br />
  While gold’s performance in 2022 was mixed, it continued to play an important role as a hedge against inflation. <br />
  The inflationary pressures experienced by many economies globally drove demand for gold as a store of value, but the impact was tempered by rising interest rates and a strong U.S. dollar. <br />
  The year reinforced gold’s status as a traditional safeguard against inflation and currency devaluation, although its effectiveness was somewhat muted by other macroeconomic factors. <br />
          </p>
        );
      case 'FedRates':
        return (
          <p className='article'>
 In 2023, the United States Federal Reserve took aggressive measures to combat the persistently high inflation that had plagued the global economy in 2022. <br />
  Faced with the highest inflation rates in four decades, the Fed implemented a series of interest rate hikes, marking a shift from its pandemic-era policy of low interest rates. <br />
  The goal was to tighten the money supply, reduce demand, and control price inflation. <br />
  The Federal Reserve's decision to raise interest rates was part of a broader effort to stabilize the economy and prevent runaway inflation. <br />
  The hikes had a significant impact on the broader financial markets, including bond yields, stock prices, and commodities. <br />
  Investors, businesses, and consumers all felt the effects, as borrowing costs increased and economic growth slowed. <br />

  The rate hikes were not without controversy. <br />
  While some viewed them as necessary to curb inflation, others feared that they could lead to an economic slowdown or even a recession. <br />
  The rate hikes were accompanied by forward guidance from the Fed, indicating that additional increases were possible depending on the trajectory of inflation and economic growth. <br />

  <strong>Impact on Gold:</strong> <br />
  Interest rate hikes typically put downward pressure on the price of gold, as they increase the opportunity cost of holding non-yielding assets like the precious metal. <br />
  When interest rates rise, investors can earn higher returns on other investments, such as bonds and savings accounts, which become more attractive relative to gold, which does not yield interest or dividends. <br />

  In 2023, gold prices faced downward pressure as the Federal Reserve continued its series of rate hikes. <br />
  The stronger U.S. dollar, which is often correlated with higher interest rates, made gold more expensive for holders of other currencies, further dampening demand. <br />

  Moreover, as the Fed raised rates, there was a shift in investor sentiment. <br />
  Gold’s traditional role as a hedge against inflation became less prominent, as rising rates indicated that the central bank was taking action to bring inflation under control. <br />
  As a result, some investors who had previously flocked to gold as an inflation hedge began to pivot to other asset classes, such as bonds, which offered higher yields. <br />

  However, despite these downward pressures, gold remained resilient due to ongoing global uncertainties, including geopolitical risks and economic instability in other parts of the world. <br />
  Gold retained its role as a safe-haven asset, albeit with more limited appeal compared to periods of lower interest rates. <br />

  <strong>Conclusion:</strong> <br />
  The Federal Reserve’s rate hikes in 2023 exerted downward pressure on gold prices, as the higher yields from other assets made gold less attractive to investors. <br />
  Rising interest rates and a stronger U.S. dollar reduced gold’s appeal as a hedge against inflation. However, gold continued to serve as a refuge during times of heightened geopolitical and economic uncertainty, maintaining its status as a key asset class despite the challenging macroeconomic environment.
          </p>
        );
      case 'Gaza':
        return (
          <p className='article'>
           The Gaza conflict, which flared up in 2023, escalated tensions in the Middle East and drew international attention. <br />
  The conflict, which was primarily between Israel and Hamas, involved significant military action and led to widespread loss of life, destruction of infrastructure, and displacement of civilians. <br />
  The situation in Gaza had ripple effects throughout the region and raised concerns about the potential for broader regional instability. <br />

  The conflict was part of a long-standing geopolitical struggle in the Middle East, with the broader implications of the ongoing Israeli-Palestinian conflict. <br />
  The 2023 escalation occurred against the backdrop of growing tensions in the region, particularly with regard to issues related to territorial disputes, political power struggles, and religious divides. <br />

  Internationally, the conflict led to calls for ceasefires and diplomatic efforts to address the humanitarian crisis. <br />
  While the direct economic impact of the Gaza conflict was somewhat localized, the broader geopolitical instability affected global markets, with concerns about oil prices, regional security, and the potential for the conflict to spill over into neighboring countries. <br />

  <strong>Impact on Gold:</strong> <br />
  Gold prices rose sharply during the 2023 Gaza conflict, as investors sought safe-haven assets amid the increased geopolitical risks. <br />
  The uncertainty surrounding the conflict, coupled with fears of potential spillover into neighboring countries, drove up demand for gold, which is considered a refuge during times of geopolitical turmoil. <br />

  As military operations intensified and the situation in Gaza became more volatile, market participants reacted by seeking safe-haven assets. <br />
  Gold, as a traditional hedge against uncertainty, saw an uptick in demand, especially from investors in regions directly affected by the conflict, as well as from global investors seeking to hedge against broader risks. <br />

  Geopolitical events like the Gaza conflict tend to create a flight-to-quality effect, where investors shift their portfolios toward low-risk assets like gold. <br />
  In this case, the conflict underscored gold’s role as a store of value during periods of crisis, reinforcing its safe-haven appeal in times of geopolitical instability. <br />

  <strong>Conclusion:</strong> <br />
  The Gaza conflict of 2023 had a clear impact on gold prices, driving them higher as investors sought safety amid the rising geopolitical tensions. <br />
  Gold’s role as a haven asset was reaffirmed during this period of uncertainty, with its price reflecting the heightened demand for protection from regional instability. <br />
  While the immediate economic impact of the conflict was localized, the broader global concern about the potential for further escalation made gold an attractive investment during this time of crisis. <br />
          </p>
        );
      default:
        return <p>Please select an event to view the article.</p>;
    }
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '20px',
        background: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '12px',
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#444' }}>
        📈 {chartTitle}
      </h3>

      {/* أزرار الأحداث */}
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {events.map((event) => (
          <button
            key={event.key}
            onClick={() => handleEventClick(event)}
            style={{
              margin: '5px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              background: selectedButton === event.key ? '#000' : '#F3F3F3', // الزر المختار يصبح أسود
              color: selectedButton === event.key ? '#FFD700' : '#333', // تغيير لون النص إلى ذهبي
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {event.key}
          </button>
        ))}
      </div>

      {/* الرسم البياني */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="price"
            data={filteredData.filter(d => d.date >= highlightRange.start && d.date <= highlightRange.end)}
            stroke="#FF0000"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* المقال المختار باستخدام switch */}
      <div style={{ marginTop: '30px', lineHeight: '1.6', fontSize: '20px', color: '#333' }}>
        <h2 style={{ color: '#222', marginBottom: '10px' }}>
           {selectedEvent ? `${selectedEvent.label} – Historical Impact on Gold` : 'Select an Event'}
        </h2>
        {renderArticle()}
      </div>
    </div>
  );
};

export default Exevent;
