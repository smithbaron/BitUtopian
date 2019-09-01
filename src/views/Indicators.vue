<template>
    <Layout>
        <Header>
            <CommonHeader :language="language" :changeState="changeState"></CommonHeader>
        </Header>
        <Content>
            <div class="indicators-content">
            <div class="indicators">
                <Row>
                    <Col span="4">
                        <Anchor :affix="false" container=".sroll_box">
                            <div @click='goShow' class="allowicon" v-show="isShow">
                                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
                            </div>
                            <div @click='goShow' class="allowicon" v-show='!isShow'>
                                <i class="ivu-icon ivu-icon-ios-arrow-forward"></i>
                            </div>
                            <AnchorLink href="#" title="Indicators">
                                <AnchorLink href="#MA" title="MA" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#SAR" title="SAR" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#BOLL" title="BOLL" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#DC" title="DC" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#KC" title="KC" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#MACD" title="MACD" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#RSI" title="RSI" v-show="isShow" class="big-title"></AnchorLink>
                                <AnchorLink href="#CCI" title="CCI" v-show="isShow" class="big-title"></AnchorLink>
                            </AnchorLink>
                        </Anchor>

                    </Col>
                    <Col span="20" class="sroll_box">
                        <div class="MA" name="MA" id="MA" :class="{'current-active':isActive=='MA'}">
                            <div class="title">
                                <span class="left">MA（Moving average）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Moving_average" target="_blank">
                          en.wikipedia.org/wiki/Moving_average</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    In statistics, a <strong>moving average (rolling average or running average) </strong>is a calculation to analyze data points by creating a series of averages of different subsets of the full data set. It is also called a <strong>moving mean (MM) or rolling mean </strong>and is a type of finite impulse response filter. Variations include: simple, and cumulative, or weighted forms (described below).
                                </p>
                                <p>
                                    A moving average is commonly used with time series data to smooth out short-term fluctuations and highlight longer-term trends or cycles. The threshold between short-term and long-term depends on the application, and the parameters of the moving average will be set accordingly. For example, it is often used in technical analysis of financial data, like stock prices, returns or trading volumes. It is also used in economics to examine gross domestic product, employment or other macroeconomic time series.
                                </p>
                                <p>
                                    Mathematically, a moving average is a type of convolutionand so it can be viewed as an example of a low-pass filter used in signal processing. When used with non-time series data, a moving average filters higher frequency components without any specific connection to time, although typically some kind of ordering is implied. Viewed simplistically it can be regarded as smoothing the data.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="MASimple@tv-basicstudies" height="500" theme="Light" containerId="tradingview_111e8"></TVChart>
                                </div>
                            </div>
                        </div>
                        <div class="SAR" name="SAR" id="SAR" :class="{'current-active':isActive=='SAR'}">
                            <div class="title">
                                <span class="left">SAR（stop and reverse）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Parabolic_SAR" target="_blank">
                          en.wikipedia.org/wiki/Parabolic_SAR</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    In stock and securities market technical analysis, <strong>parabolic SAR </strong>(parabolic stop and reverse) is a method devised by J. Welles Wilder, Jr., to find potential reversals in the market pricedirection of traded goods such as securities or currency exchanges such as forex. It is a trend-following (lagging) indicator and may be used to set a trailing stop loss or determine entry or exit points based on prices tending to stay within a parabolic curve during a strong trend.
                                </p>
                                <p>
                                    Similar to option theory's concept of time decay, the concept draws on the idea that "time is the enemy". Thus, unless a security can continue to generate more profits over time, it should be liquidated. The indicator generally works only in trending markets, and creates "whipsaws" during ranging or, sideways phases. Therefore, Wilder recommends first establishing the direction or change in direction of the trend through the use of parabolic SAR, and then using a different indicator such as the Average Directional Index to determine the strength of the trend.
                                </p>
                                <p>
                                    A parabola below the price is generally bullish, while a parabola above is generally bearish. A parabola below the price may be used as support, whereas a parabola above the price may represent resistance. These parabola may be used as price areas for stop losses or profit targets.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="PSAR@tv-basicstudies" height="500" theme="Light" containerId="tradingview_cae90"></TVChart>
                                </div>
                            </div>
                        </div>
                        <div class="BOLL" name="BOLL" id="BOLL" :class="{'current-active':isActive=='BOLL'}">
                            <div class="title">
                                <span class="left">BOLL（Bollinger Bands）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Bollinger_Bands" target="_blank">
                          en.wikipedia.org/wiki/Bollinger_Bands</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    <strong>Bollinger Bands</strong> are a type of statistical chart characterizing the prices and volatility over time of a financial instrument or commodity, using a formulaic method propounded by John Bollinger in the 1980s. Financial traders employ these charts as a methodical tool to inform trading decisions, control automated trading systems, or as a component of technical analysis. Bollinger Bands display a graphical band (the envelope maximum and minimum of moving averages, similar to Keltner or Donchian channels) and volatility (expressed by the width of the envelope) in one two-dimensional chart.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Purpose</p>
                                <p class="p2">The purpose of Bollinger Bands is to provide a relative definition of high and low prices of a market. By definition, prices are high at the upper band and low at the lower band. This definition can aid in rigorous pattern recognition and is useful in comparing price action to the action of indicators to arrive at systematic trading decisions. </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Interpretation</p>
                                <p class="p2">The use of Bollinger Bands varies widely among traders. Some traders buy when price touches the lower Bollinger Band and exit when price touches the moving average in the center of the bands. Other traders buy when price breaks above the upper Bollinger Band or sell when price falls below the lower Bollinger Band. Moreover, the use of Bollinger Bands is not confined to stock traders; options traders, most notably implied volatility traders, often sell options when Bollinger Bands are historically far apart or buy options when the Bollinger Bands are historically close together, in both instances, expecting volatility to revert towards the average historical volatility level for the stock. </p>
                                <p class="p2">
                                    When the bands lie close together, a period of low volatility is indicated. Conversely, as the bands expand, an increase in price action/market volatility is indicated. When the bands have only a slight slope and track approximately parallel for an extended time, the price will generally be found to oscillate between the bands as though in a channel.
                                </p>
                                <p class="p2">
                                    Traders are often inclined to use Bollinger Bands with other indicators to confirm price action. In particular, the use of oscillator-like Bollinger Bands will often be coupled with a non-oscillator indicator-like chart patterns or a trendline. If these indicators confirm the recommendation of the Bollinger Bands, the trader will have greater conviction that the bands are predicting correct price action in relation to market volatility.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="BB@tv-basicstudies" height="500" theme="Light" containerId="tradingview_b6abd"></TVChart>
                                </div>
                            </div>
                        </div>
                        <div class="DC" name="DC" id="DC" :class="{'current-active':isActive=='DC'}">
                            <div class="title">
                                <span class="left">DC（Donchian channel）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Donchian_channel" target="_blank">
                          en.wikipedia.org/wiki/Donchian_channel</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    The <strong>Donchian channel</strong> is an indicator used in market trading developed by Richard Donchian. It is formed by taking the highest high and the lowest low of the last n periods. The area between the high and the low is the channel for the period chosen.
                                </p>
                                <p>
                                    It is commonly available on most trading platforms. On a charting program, a line is marked for the high and low values visually demonstrating the channel on the markets price (or other) values.
                                </p>
                                <p>
                                    The Donchian channel is a useful indicator for seeing the volatility of a market price. If a price is stable the Donchian channel will be relatively narrow. If the price fluctuates a lot the Donchian channel will be wider. Its primary use, however, is for providing signals for long and short positions. If a security trades above its highest n periods high, then a long is established. If it trades below its lowest n periods low, then a short is established.
                                </p>
                                <p>
                                    Originally the n periods were based upon daily values. With today's trading platforms, the period may be of the value desired by the investor. i.e.: day, hour, minute, ticks, etc.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="DONCH@tv-basicstudies" height="500" theme="Light" containerId="tradingview_d6f27"></TVChart>
                                </div>
                            </div>

                        </div>
                        <div class="KC" name="KC" id="KC" :class="{'current-active':isActive=='KC'}">
                            <div class="title">
                                <span class="left">KC（Keltner channel）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Keltner_channel" target="_blank">
                          en.wikipedia.org/wiki/Keltner_channel</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    <strong>Keltner channel</strong> is a technical analysis indicator showing a central moving average line plus channel lines at a distance above and below. The indicator is named after Chester W. Keltner (1909–1998) who described it in his 1960 book How To Make Money in Commodities. This name was applied by those who heard about it from him, but Keltner called it <strong>the ten-day moving average trading rule </strong>and indeed made no claim to any originality for the idea.
                                </p>
                                <p>
                                    The trading strategy is to regard a close above the upper line as a strong bullish signal, or a close below the lower line as strong bearish sentiment, and buy or sell with the trend accordingly, but perhaps with other indicators to confirm.
                                </p>
                                <p>
                                    The origin of this idea is uncertain. Keltner was a Chicago grain trader and perhaps it was common knowledge among traders of the day. Or in the 1930s as a young man Keltner worked for Ralph Ainsworth (1884–1965) backtesting trading systems submitted when Ainsworth offered a substantial prize for a winning strategy, so it could have been among those. But ideas of channels with fixed widths go back to the earliest days of charting, so perhaps applying some averaging is not an enormous leap in any case.
                                </p>
                                <p>
                                    Later authors, such as Linda Bradford Raschke, have published modifications for the Keltner channel, such as different averaging periods; or an exponential moving average; or using a multiple of Wilder's average true range (ATR) for the bands. These variations have merit, but are often still just called Keltner channel, creating some confusion as to what exactly one gets from an indicator called that.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="KLTNR@tv-basicstudies" height="500" theme="Light" containerId="tradingview_ff6c7"></TVChart>
                                </div>
                            </div>
                        </div>
                        <div class="MACD" name="MACD" id="MACD" :class="{'current-active':isActive=='MACD'}">
                            <div class="title">
                                <span class="left">MACD（moving average convergence/divergence）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/MACD" target="_blank">
                          en.wikipedia.org/wiki/MACD</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    <strong>MACD</strong> , short for <strong>moving average convergence/divergence</strong> , is a trading indicator used in technical analysis of stock prices, created by Gerald Appel in the late 1970s. It is designed to reveal changes in the strength, direction, momentum, and duration of a trend in a stock's price.
                                </p>
                                <p>
                                    The MACD indicator (or "oscillator") is a collection of three time series calculated from historical price data, most often the closing price. These three series are: the MACD series proper, the "signal" or "average" series, and the "divergence" series which is the difference between the two. The MACD series is the difference between a "fast" (short period) exponential moving average (EMA), and a "slow" (longer period) EMA of the price series. The average series is an EMA of the MACD series itself.
                                </p>
                                <p>
                                    Since the MACD is based on moving averages, it is inherently a lagging indicator. As a metric of price trends, the MACD is less useful for stocks that are not trending (trading in a range) or are trading with erratic price action.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Trading interpretation</p>
                                <p class="p2">Exponential moving averages highlight recent changes in a stock's price. By comparing EMAs of different lengths, the MACD series gauges changes in the trend of a stock. The difference between the MACD series and its average is claimed to reveal subtle shifts in the strength and direction of a stock's trend. It may be necessary to correlate the signals with the MACD to indicators like RSI power.</p>
                                <p class="p2">
                                    Some traders attribute special significance to the MACD line crossing the signal line, or the MACD line crossing the zero axis. Significance is also attributed to disagreements between the MACD line or the difference line and the stock price (specifically, higher highs or lower lows on the price series that are not matched in the indicator series).
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Signal-line crossover</p>
                                <p class="p2">A "signal-line crossover" occurs when the MACD and average lines cross; that is, when the divergence (the bar graph) changes sign. The standard interpretation of such an event is a recommendation to buy if the MACD line crosses up through the average line (a "bullish" crossover), or to sell if it crosses down through the average line (a "bearish" crossover). These events are taken as indications that the trend in the stock is about to accelerate in the direction of the crossover.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Zero crossover</p>
                                <p class="p2">A "zero crossover" event occurs when the MACD series changes sign, that is, the MACD line crosses the horizontal zero axis. This happens when there is no difference between the fast and slow EMAs of the price series. A change from positive to negative MACD is interpreted as "bearish", and from negative to positive as "bullish". Zero crossovers provide evidence of a change in the direction of a trend but less confirmation of its momentum than a signal line crossover.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Divergence</p>
                                <p class="p2">A "positive divergence" or "bullish divergence" occurs when the price makes a new low but the MACD does not confirm with a new low of its own. A "negative divergence" or "bearish divergence" occurs when the price makes a new high but the MACD does not confirm with a new high of its own. A divergence with respect to price may occur on the MACD line and/or the MACD Histogram.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Timing</p>
                                <p class="p2">The MACD is only as useful as the context in which it is applied. An analyst might apply the MACD to a weekly scale before looking at a daily scale, in order to avoid making short term trades against the direction of the intermediate trend. Analysts will also vary the parameters of the MACD to track trends of varying duration. One popular short-term set-up, for example, is the (5,35,5).</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">False signals</p>
                                <p class="p2">A prudent strategy may be to apply a filter to signal line crossovers to ensure that they have held up. An example of a price filter would be to buy if the MACD line breaks above the signal line and then remains above it for three days. As with any filtering strategy, this reduces the probability of false signals but increases the frequency of missed profit.</p>
                                <p class="p2">
                                    Analysts use a variety of approaches to filter out false signals and confirm true ones.A MACD crossover of the signal line indicates that the direction of the acceleration is changing. The MACD line crossing zero suggests that the average velocity is changing direction.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="MACD@tv-basicstudies" height="500" theme="Light" containerId="tradingview_cd4dc"></TVChart>
                                </div>
                            </div>
                        </div>
                        <div class="RSI" name="RSI" id="RSI" :class="{'current-active':isActive=='RSI'}">
                            <div class="title">
                                <span class="left">RSI(Relative strength index)</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Relative_strength_index" target="_blank">
                          en.wikipedia.org/wiki/Relative_strength_index</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    The <strong>relative strength index (RSI) </strong>is a technical indicator used in the analysis of financial markets. It is intended to chart the current and historical strength or weakness of a stock or market based on the closing prices of a recent trading period. The indicator should not be confused with relative strength.
                                </p>
                                <p>
                                    The RSI is classified as a momentum oscillator, measuring the velocity and magnitude of directional price movements. Momentum is the rate of the rise or fall in price. The RSI computes momentum as the ratio of higher closes to lower closes: stocks which have had more or stronger positive changes have a higher RSI than stocks which have had more or stronger negative changes.
                                </p>
                                <p>
                                    The RSI is most typically used on a 14-day timeframe, measured on a scale from 0 to 100, with high and low levels marked at 70 and 30, respectively. Shorter or longer timeframes are used for alternately shorter or longer outlooks. More extreme high and low levels—80 and 20, or 90 and 10—occur less frequently but indicate stronger momentum.
                                </p>
                                <p>
                                    The relative strength index was developed by J. Welles Wilder and published in a 1978 book, New Concepts in Technical Trading Systems, and in Commodities magazine (now Futuresmagazine) in the June 1978 issue.[1] It has become one of the most popular oscillator indices.
                                </p>
                                <p>
                                    The RSI provides signals that tell investors to buy when the security or currency is oversold and to sell when it is overbought.
                                </p>
                                <p>
                                    RSI with recommended parameters and its day-to-day optimization was tested and compared with other strategies in Marek and Šedivá (2017). The testing was randomised in time and companies (e.g., Apple, Exxon Mobile, IBM, Microsoft) and showed that RSI can still produce good results; however, in longer time it is usually overcome by the simple buy-and-hold strategy.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Interpretation</p>
                                <p class="p1">Basic configuration</p>
                                <p class="p2">The RSI is presented on a graph above or below the price chart. The indicator has an upper line, typically at 70, a lower line at 30, and a dashed mid-line at 50. Wilder recommended a smoothing period of 14 (see exponential smoothing, i.e. α = 1/14 or N = 14).</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Principles</p>
                                <p class="p2">Wilder posited that when price moves up very rapidly, at some point it is considered overbought. Likewise, when price falls very rapidly, at some point it is considered oversold. In either case, Wilder deemed a reaction or reversal imminent.</p>
                                <p class="p2">The level of the RSI is a measure of the stock's recent trading strength. The slope of the RSI is directly proportional to the velocity of a change in the trend. The distance traveled by the RSI is proportional to the magnitude of the move.</p>
                                <p class="p2">
                                    Wilder believed that tops and bottoms are indicated when RSI goes above 70 or drops below 30. Traditionally, RSI readings greater than the 70 level are considered to be in overbought territory, and RSI readings lower than the 30 level are considered to be in oversold territory. In between the 30 and 70 level is considered neutral, with the 50 level a sign of no trend.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Divergence</p>
                                <p class="p2">Wilder further believed that divergence between RSI and price action is a very strong indication that a market turning point is imminent. Bearish divergence occurs when price makes a new high but the RSI makes a lower high, thus failing to confirm. Bullish divergence occurs when price makes a new low but RSI makes a higher low.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Overbought and oversold conditions</p>
                                <p class="p2">Wilder thought that "failure swings" above 70 and below 30 on the RSI are strong indications of market reversals. For example, assume the RSI hits 76, pulls back to 72, then rises to 77. If it falls below 72, Wilder would consider this a "failure swing" above 70.</p>
                                <p class="p2">Finally, Wilder wrote that chart formations and areas of support and resistance could sometimes be more easily seen on the RSI chart as opposed to the price chart. The center line for the relative strength index is 50, which is often seen as both the support and resistance line for the indicator.</p>
                                <p class="p2">If the relative strength index is below 50, it generally means that the stock's losses are greater than the gains. When the relative strength index is above 50, it generally means that the gains are greater than the losses.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Divergence</p>
                                <p class="p2">Wilder further believed that divergence between RSI and price action is a very strong indication that a market turning point is imminent. Bearish divergence occurs when price makes a new high but the RSI makes a lower high, thus failing to confirm. Bullish divergence occurs when price makes a new low but RSI makes a higher low.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Uptrends and downtrends</p>
                                <p class="p2">In addition to Wilder's original theories of RSI interpretation, Andrew Cardwell has developed several new interpretations of RSI to help determine and confirm trend. First, Cardwell noticed that uptrends generally traded between RSI 40 and 80, while downtrends usually traded between RSI 60 and 20. Cardwell observed when securities change from uptrend to downtrend and vice versa, the RSI will undergo a "range shift."</p>
                                <p class="p2">Next, Cardwell noted that bearish divergence: 1) only occurs in uptrends, and 2) mostly only leads to a brief correction instead of a reversal in trend. Therefore, bearish divergence is a sign confirming an uptrend. Similarly, bullish divergence is a sign confirming a downtrend.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Reversals</p>
                                <p class="p2">Finally, Cardwell discovered the existence of positive and negative reversals in the RSI. Reversals are the opposite of divergence. For example, a positive reversal occurs when an uptrend price correction results in a higher low compared to the last price correction, while RSI results in a lower low compared to the prior correction. A negative reversal happens when a downtrend rally results in a lower high compared to the last downtrend rally, but RSI makes a higher high compared to the prior rally.</p>
                                <p class="p2">In other words, despite stronger momentum as seen by the higher high or lower low in the RSI, price could not make a higher high or lower low. This is evidence the main trend is about to resume. Cardwell noted that positive reversals only happen in uptrends while negative reversals only occur in downtrends, and therefore their existence confirms the trend.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="RSI@tv-basicstudies" height="500" theme="Light" containerId="tradingview_b05a2"></TVChart>
                                </div>
                            </div>
                        </div>
                        <div class="CCI" name="CCI" id="CCI" :class="{'current-active':isActive=='CCI'}">
                            <div class="title">
                                <span class="left">CCI（Commodity channel index）</span>
                                <span class="right">Source：
                          <a href="https://en.wikipedia.org/wiki/Commodity_channel_index" target="_blank">
                          en.wikipedia.org/wiki/Commodity_channel_index</a>
                        </span>
                            </div>
                            <div class="box-con">
                                <p>
                                    The <strong>commodity channel index (CCI) </strong>is an oscillator originally introduced by Donald Lambert in 1980.
                                </p>
                                <p>
                                    Since its introduction, the indicator has grown in popularity and is now a very common tool for traders in identifying cyclical trends not only in commodities, but also equities and currencies. The CCI can be adjusted to the timeframe of the market traded on by changing the averaging period.
                                </p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Interpretation</p>
                                <p class="p2">Traders and investors use the commodity channel index to help identify price reversals, price extremes and trend strength. As with most indicators, the CCI should be used in conjunction with other aspects of technical analysis. CCI fits into the momentum category of oscillators. In addition to momentum, volume indicators and the price chart may also influence a technical assessment. It is often used for detecting divergences from price trends as an overbought/oversold indicator, and to draw patterns on it and trade according to those patterns. In this respect, it is similar to bollinger bands, but is presented as an indicator rather than as overbought/oversold levels.</p>
                                <p class="p2">The CCI typically oscillates above and below a zero line. Normal oscillations will occur within the range of +100 and −100. Readings above +100 imply an overbought condition, while readings below −100 imply an oversold condition. As with other overbought/oversold indicators, this means that there is a large probability that the price will correct to more representative levels.</p>
                                <p class="p2">The CCI has seen substantial growth in popularity amongst technical investors; today's traders often use the indicator to determine cyclical trends in not only commodities, but also equities and currencies.</p>
                                <p class="p2">The CCI, when used in conjunction with other oscillators, can be a valuable tool to identify potential peaks and valleys in the asset's price, and thus provide investors with reasonable evidence to estimate changes in the direction of price movement of the asset.</p>
                                <p class="p2">Lambert's trading guidelines for the CCI focused on movements above +100 and below −100 to generate buy and sell signals. Because about 70 to 80 percent of the CCI values are between +100 and −100, a buy or sell signal will be in force only 20 to 30 percent of the time. When the CCI moves above +100, a security is considered to be entering into a strong uptrend and a buy signal is given. The position should be closed when the CCI moves back below +100. When the CCI moves below −100, the security is considered to be in a strong downtrend and a sell signal is given. The position should be closed when the CCI moves back above −100.</p>
                                <p class="p2">Since Lambert's original guidelines, traders have also found the CCI valuable for identifying reversals. The CCI is a versatile indicator capable of producing a wide array of buy and sell signals.</p>
                                <p class="p2">• CCI can be used to identify overbought and oversold levels. A security would be deemed oversold when the CCI dips below −100 and overbought when it exceeds +100. From oversold levels, a buy signal might be given when the CCI moves back above −100. From overbought levels, a sell signal might be given when the CCI moved back below +100.</p>
                                <p class="p2">• As with most oscillators, divergences can also be applied to increase the robustness of signals. A positive divergence below −100 would increase the robustness of a signal based on a move back above −100. A negative divergence above +100 would increase the robustness of a signal based on a move back below +100.</p>
                                <p class="p2">• Trend line breaks can be used to generate signals. Trend lines can be drawn connecting the peaks and troughs. From oversold levels, an advance above −100 and trend line breakout could be considered bullish. From overbought levels, a decline below +100 and a trend line break could be considered bearish.</p>
                            </div>
                            <div class="real-time">
                                <p class="p1">Real-Time Chart</p>
                                <p class="p2">That says a lot, but you can actually do it here.</p>
                                <div class="chart1">
                                    <TVChart studies="CCI@tv-basicstudies" height="500" theme="Light" containerId="tradingview_92a02"></TVChart>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
    </div>
        </Content>
        <Footer>
            <div class="footer">
                <p>Copyright © 2013-2019 XXXX Inc. All rights reserved.</p >
            </div>
        </Footer>
    </Layout>
</template>

<script>
import { Layout, Row, Col, Anchor, AnchorLink } from 'iview'
import TVChart from '../components/TVChart'
import CommonHeader from '../components/CommonHeader'

export default {
  name: 'Indicators',
  components: {
    Layout,
    Row,
    Col,
    Anchor,
    AnchorLink,
    CommonHeader,
    TVChart
  },
  data () {
    return {
      theme: 'dark',
      language: 'en',
      isLogin: false,
      isActive: '',
      isShow: true
    }
  },
  methods: {
    changeState (state, value) {
      this[state] = value
    },
    goShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="css">
.indicators-content{
    width:100%;
    height: auto;
    top: 56px;
    position: fixed;
}
.indicators{

}
.indicators-content .ivu-anchor-wrapper{

}
.ivu-anchor .ivu-anchor-link{
    padding-top: 0px;
}
.exchange-content{
    width:100%;
    height: auto;
    margin-top: 50px;
}
.excontent{
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
}
.indicators .ivu-col-span-4{
    background-color: #fafafa;
    font-size: 14px;
}
.ivu-col-span-4 .ivu-anchor-link-title{
    color: #333;
    font-weight: bold;
}
.big-title .ivu-anchor-link-title{
    color: #9d9d9d;
    font-weight: normal;
    padding-left: 20px;
}
.current-active{

}
.allowicon{
    position: absolute;
    top: 16px;
    left: 8px;
    font-size: 14px;
    z-index: 11000;
}
a:hover{
    color: #f90;
}
.excontent .ivu-icon{

}
.indicators .ivu-anchor-link .ivu-anchor-link{
    padding: 0px;
}

.indicators .ivu-anchor-link a{
    line-height: 56px;
    padding: 0px;
    margin-left: 10px;
}
.ivu-anchor-link-active{
    background-color: #F9F6F1;
    color: #f90;
    border-left: 4px solid #f90;
}
.ivu-anchor-link-active>.ivu-anchor-link-title{
    color: #f90;
}
.ivu-anchor-link-title{
    padding-left: 15px;
    color: #333;
    font-size: 14px;
    font-weight: 700;
}
.sroll_box{
    position: relative;
    overflow-y: scroll;
    height: 100vh;
    padding: 0px 50px 25px 25px;

}
.MA,.SAR,.BOLL,.DC,.KC,.MACD,.RSI,.CCI{
    height: 500px;
    clear: both;
}
.sroll_box .title{
    border-bottom: 1px solid #f2f2f2;
    line-height: 40px;
    height: 40px;
}
.sroll_box span.left{
    text-align: left;
    float: left;
    font-size: 22px;
    color: #333;
}
.sroll_box span.right{
    text-align: right;
    float: right;
    font-size: 14px;
    color: #333;
}
.sroll_box span.right a{
    color: #f90;
    text-decoration: underline;
}
.sroll_box .box-con{
    line-height: 25px;
    color: #666;
    letter-spacing: 0;
    clear: both;
    padding-top: 20px;
    font-size: 14px;
}
.sroll_box .box-con p{
    padding-bottom: 10px;
}
.sroll_box .real-time{
    float: left;
    width: 100%;
    margin-bottom: 20px;
}
.sroll_box .real-time .p1{
    line-height: 40px;
    color: #333;
    letter-spacing: 0;
    clear: both;
    padding-top: 20px;
    font-size: 20px;
    border-bottom: 1px solid #f2f2f2;
}
.sroll_box .real-time .p2{
    line-height: 25px;
    color: #666;
    letter-spacing: 0;
    clear: both;
    padding-top: 5px;
    font-size: 14px;
}
.chart1{
    width: 100%;
    height: 500px;
    clear: both;
    margin: 10PX auto 0;
}
.footer{
    display: none;
    background: -webkit-linear-gradient(top, #323232 0%, #020202 100%);
    background: linear-gradient(top, #323232 0%, #020202 100%);
    width:100%;
    text-align: center;
    height:200px;
}
.footer p{
    color: #a1a1a1;
    font-size: 14px;
    padding-top: 160px;
}
</style>
