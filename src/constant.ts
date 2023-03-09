import { Feature, whyInvest, teamType, ComparisonType } from './types';
import featureImg1 from '../public/img/icon/feature1.png';
import featureImg2 from '../public/img/icon/feature2.png';
import featureImg3 from '../public/img/icon/feature3.png';
import featureImg4 from '../public/img/icon/feature4.png';
export const features: Feature[] = [
  {
    titile: 'AI Signals',
    subTitle:
      'real-time trading signals from cutting edge predictive models by top 1% AI experts.',
    image: featureImg1,
  },
  {
    titile: '100+ Chart Pattern Recognition',
    subTitle:
      'Real-time alert on chart patterns, fibonacci patterns, breakout patterns, etc.',
    image: featureImg2,
  },
  {
    titile: 'Technical Analysis by AI',
    subTitle: 'Let AI find the most effective indicators for your asset.',
    image: featureImg3,
  },
  {
    titile: '25+ Chart Pattern Recognition ',
    subTitle:
      'real-time trading signals from cutting edge predictive models by top 1% AI experts.',
    image: featureImg4,
  },
];

export const whyInvesting: whyInvest[] = [
  {
    title: '10-100x Potential',
    descripetion:
      'Similar projects with far inferior offerings share a token mc of 50-100m at bare minimum, where YPREDS are designed with only 4.5m MC at listing.',
  },
  {
    title: 'Upto 45% / Quarterly Staking Rewards',
    descripetion:
      'Similar projects with far inferior offerings share a token mc of 50-100m at bare minimum, where YPREDS are designed with only 4.5m MC at listing.',
  },
  {
    title: 'Lifetime Free Predictions',
    descripetion:
      'Similar projects with far inferior offerings share a token mc of 50-100m at bare minimum, where YPREDS are designed with only 4.5m MC at listing.',
  },
  {
    title: 'Huge Discounts',
    descripetion:
      'Similar projects with far inferior offerings share a token mc of 50-100m at bare minimum, where YPREDS are designed with only 4.5m MC at listing.',
  },
];

import tem1 from '../public/img/team/1.png';
import tem2 from '../public/img/team/2.png';
import tem3 from '../public/img/team/3.png';
import tem4 from '../public/img/team/4.png';
export const TeamMembers: teamType[] = [
  {
    name: 'Raj Sharma',
    role: 'ceo',
    image: tem1,
  },
  {
    name: 'Raj Sharma',
    role: 'ceo',
    image: tem2,
  },
  {
    name: 'Raj Sharma',
    role: 'ceo',
    image: tem3,
  },
  {
    name: 'Raj Sharma',
    role: 'ceo',
    image: tem4,
  },
];
import comicon1 from '../public/img/icon/Comparison/1_sentiment.png';
import Quote from '../public/img/icon/Comparison/2_quote.png';
import Terminal from '../public/img/icon/Comparison/3_terminal.png';
import dataAnlicis from '../public/img/icon/Comparison/4_Transactional.png';
import AiPrediction from '../public/img/icon/Comparison/5_AI.png';
import Indicator from '../public/img/icon/Comparison/6_Indicator.png';
import PredictionMarketplace from '../public/img/icon/Comparison/7_Marketplace.png';
import FreePredictions from '../public/img/icon/Comparison/8_free.png';
import ChartTrading from '../public/img/icon/Comparison/9_chart.png';
export const comparison: ComparisonType[] = [
  {
    name: 'comparison',
    icon: comicon1,
    defytrends: true,
    dash2trade: true,
    lunarcrush: true,
  },
  {
    name: 'Quote',
    icon: Quote,
    defytrends: true,
    dash2trade: true,
    lunarcrush: false,
  },
  {
    name: 'Trading Terminal',
    icon: Terminal,
    defytrends: true,
    dash2trade: true,
    lunarcrush: false,
  },
  {
    name: 'Transactional Data Analysis',
    icon: dataAnlicis,
    defytrends: true,
    dash2trade: false,
    lunarcrush: false,
  },
  {
    name: 'AI Prediction',
    icon: AiPrediction,
    defytrends: false,
    dash2trade: true,
    lunarcrush: false,
  },
  {
    name: 'Auto Indicator',
    icon: Indicator,
    defytrends: false,
    dash2trade: false,
    lunarcrush: false,
  },
  {
    name: 'Auto Indicator',
    icon: Indicator,
    defytrends: false,
    dash2trade: false,
    lunarcrush: false,
  },
  {
    name: 'Prediction Marketplace',
    icon: PredictionMarketplace,
    defytrends: false,
    dash2trade: false,
    lunarcrush: false,
  },
  {
    name: 'Free Predictions',
    icon: FreePredictions,
    defytrends: false,
    dash2trade: false,
    lunarcrush: false,
  },
  {
    name: 'Chart Trading',
    icon: ChartTrading,
    defytrends: false,
    dash2trade: false,
    lunarcrush: false,
  },
];
