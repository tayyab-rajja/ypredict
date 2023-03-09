import React, { useState } from 'react';
import Image from 'next/image';
import privateImg from "../../../public/img/icon/private-sale-row-image.svg"
import preImg from "../../../public/img/icon/pre-sale-row-image.svg"
import publicImg from "../../../public/img/icon/public-sale-row-image.svg"

const allocVestingData = [
  {
    allocatedTo: 'Private Sale',
    percent: '2',
    supply: '2000000',
    vesting: '50% unlock at TGE,2 weeks lock,6 months vest',
  },
  {
    allocatedTo: 'PreSale',
    percent: '8',
    supply: '8000000',
    vesting: '50% unlock at TGE,4 weeks lock,6 months vest',
  },
  {
    allocatedTo: 'Public Sale',
    percent: '18',
    supply: '18000000',
    vesting: '50% unlock at TGE,6 weeks lock,6 months vest',
  },
  {
    allocatedTo: 'Marketing',
    percent: '6',
    supply: '6000000',
    vesting: '50% unlock in week 2,24 month vest',
  },
  {
    allocatedTo: 'Development',
    percent: '10',
    supply: '10000000',
    vesting: '50% unlock in week 2,1 month lock,36 month vest',
  },
  {
    allocatedTo: 'Team',
    percent: '10',
    supply: '10000000',
    vesting: '4 week lock,24 month vest',
  },
  {
    allocatedTo: 'Liquidity',
    percent: '20',
    supply: '20000000',
    vesting: '100% unlock at TGE',
  },
  {
    allocatedTo: 'Staking Rewards',
    percent: '10',
    supply: '10000000',
    vesting: '10% unlock in week one,2 week lock,36 month vest',
  },
  {
    allocatedTo: 'Advisors',
    percent: '1',
    supply: '1000000',
    vesting: '50% unlock at TGE,4 week lock,3 month vest',
  },
  {
    allocatedTo: 'Treasury',
    percent: '14',
    supply: '14000000',
    vesting: '50% unlock at TGE,2 week lock,6 month vest',
  },
  {
    allocatedTo: 'Influencers',
    percent: '1',
    supply: '1000000',
    vesting: '50% unlock at TGE,4 week lock,4 month vest',
  },
];

const Tokenomics = () => {
  const [tab, setTap] = useState(1);

  return (
    <section className="main-container py-4">
      <header className="md:flex justify-between py-4 items-center">
        <h2 className="text-[1em] md:text-[1.8em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
          Tokenomics
        </h2>
        <ul className="flex items-center gap-x-3">
          <li>
            <button
              className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  "
              name="token-sale-css-tabs"
              id="sale-tab-1"
              onClick={() => setTap(1)}
            >
              <span className="relative w-full px-1 lg:px-5 bg-[#0f131e] py-2 transition-all ease-in duration-75 text-white group-hover:bg-opacity-0 ">
                <span className=''></span>
                <div className="flex w-full items-center gap-2">
                  Sale Details
                </div>
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTap(2)}
              className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  "
            >
              <span className="relative w-full px-1 lg:px-5 bg-[#0f131e] py-2 transition-all ease-in duration-75 text-white group-hover:bg-opacity-0">
                <div className="flex w-full items-center gap-2">
                  Allocation and Vesting
                </div>
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTap(3)}
              className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  "
            >
              <span className="relative w-full  px-1 lg:px-5 bg-[#0f131e] py-2 transition-all ease-in duration-75 text-white group-hover:bg-opacity-0">
                <div className="flex w-full items-center gap-2">Road Map</div>
              </span>
            </button>
          </li>
        </ul>
      </header>
      {/* details  */}
      <div className="div w-full bg-[#161a25] rounded-xl min-h-[190px] overflow-x-auto">
        <div className="meettheteam-image-section">
          {/* Tabs 1 */}

          {tab === 1 ? (
            <div className="token-sale-section sale-details py-3">
              <div className="token-sale-table-container">
                <div className="token-sale-table">
                  <div className="token-sale-table-row table-header">
                    <div className="row-image">&nbsp;</div>
                    <div className="header-text">Offering Type</div>
                    <div className="header-text">Quantity</div>
                    <div className="header-text">Price</div>
                    <div className="header-text">Raise</div>
                    <div className="header-text">Marketcap</div>
                    <div className="header-text">
                      Minimum
                      <br />
                      Appreciation %<br />
                      at TGE
                    </div>
                  </div>

                  <div className="token-sale-table-row table-row mx-10">
                    <div className="row-image">
                      <Image
                        src={privateImg}
                        className="token-sale-row-image"
                        alt="private-img"

                      />
                    </div>
                    <div className="header-text">Private Sale</div>
                    <div className="header-text withbgpad">2m</div>
                    <div className="header-text withbgpad">0.036</div>
                    <div className="header-text withbgpad">72k</div>
                    <div className="header-text withbgpad">-</div>
                    <div className="header-text withbgpad">25%</div>
                  </div>

                  <div className="token-sale-table-row table-row">
                    <div className="row-image">
                      <Image
                        src={preImg}
                        className="token-sale-row-image"
                        alt='pre-img'
                      />
                      
                    </div>
                    <div className="header-text">Pre Sale</div>
                    <div className="header-text withbgpad">8m</div>
                    <div className="header-text withbgpad">0.037</div>
                    <div className="header-text withbgpad">300k</div>
                    <div className="header-text withbgpad">-</div>
                    <div className="header-text withbgpad">20%</div>
                  </div>

                  <div className="token-sale-table-row table-row">
                    <div className="row-image">
                      <Image
                        src={publicImg}
                        className="token-sale-row-image"
                        alt='pre-img'
                      />
                    </div>
                    <div className="header-text">Public Sale</div>
                    <div className="header-text withbgpad">18m</div>
                    <div className="header-text withbgpad">0.038</div>
                    <div className="header-text withbgpad">700k</div>
                    <div className="header-text withbgpad">-</div>
                    <div className="header-text withbgpad">15%</div>
                  </div>
                  {/* Tabs 2 */}
                  <div className="token-sale-table-row table-footer">
                    <div
                      className="row-image"
                      style={{ opacity: '0', width: '0' }}
                    ></div>

                    <div
                      className="header-text footer-launch"
                      style={{ width: '195px' }}
                    >
                      Launch
                    </div>
                    <div
                      className="header-text withbgpad"
                      style={{ opacity: '0' }}
                    ></div>
                    <div className="header-text withbgpad">0.045</div>
                    <div
                      className="header-text withbgpad"
                      style={{ opacity: ' 0' }}
                    ></div>
                    <div className="header-text withbgpad">4.5m</div>
                    <div
                      className="header-text withbgpad"
                      style={{ opacity: ' 0' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ) : tab === 2 ? (
            <div className="token-sale-section allocation-vesting team-member-hidden py-3">
              <div className="token-sale-table-container">
                <div className="token-sale-table">
                  <div className="token-sale-table-row table-header">
                    {/* <div className="row-image">&nbsp;</div> */}
                    <div className="header-text">Allocated to</div>
                    <div className="header-text">%</div>
                    <div className="header-text">Allocation</div>
                    <div className="header-text">Vesting</div>
                  </div>
                  {allocVestingData.map((data, key) => (
                    <div
                      key={`alloc-data-${key}`}
                      className="token-sale-table-row table-row"
                    >
                      {/* <div className="row-image">
                      <img src="img/private-sale-row-image.svg" className="token-sale-row-image" alt="private-sale-row-image.svg" />
                    </div> */}
                      <div className="header-text">{data.allocatedTo}</div>
                      <div className="header-text withbgpad">
                        {data.percent}
                      </div>
                      <div className="header-text withbgpad">{data.supply}</div>
                      <div className="header-text withbgpad header-text-last-child">
                        {data.vesting}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="token-sale-section text-white p-7 road-map team-member-hidden">
              <div className="platform-payment">
                <div className="">
                  <div className="payment-payment-title">
                    <span className="payment-yread text-[1em] md:text-[1.2em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                      Build
                    </span>
                  </div>
                  <div className="payment-payment-sub-title mb-10">
                    Project is currently in development where tean is dedicated
                    to have initial beta ready by Q1 2023. Including yPredict
                    Predictions, yPredict Analytics, yPredict Terminal. This
                    phase also includes token development & sales, listing,
                    promotions.
                  </div>
                </div>
                {/* <div className="platform-payment-image">
                <img src="img/growth.svg" className="img-platform-payment" alt="platform payment"/>
              </div> */}
              </div>

              <div className="platform-payment">
                <div className="">
                  <div className="payment-payment-title ">
                    <span className="payment-yread text-[1em] md:text-[1.2em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                      Grow
                    </span>
                  </div>
                  <div className=" mb-10  payment-payment-sub-title">
                    Growth phase will focus mainly on stabilizing the core
                    offerings and organically growing the community and reaching
                    a 100m marketcap for YPRED tokens.{' '}
                  </div>
                </div>
                {/* <div className="platform-payment-image">
                <img src="img/engage.svg" className="img-platform-payment" alt="platform payment"/>
              </div> */}
              </div>

              <div className="platform-payment">
                <div className="">
                  <div className="payment-payment-title">
                    <span className="payment-yread text-[1em] md:text-[1.2em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                      Engage & Scale
                    </span>
                  </div>
                  <div className="payment-payment-sub-title">
                    By this phase we expect to have our ecosystem fully
                    developed and stable products and growing community. This
                    phase will focus on large scale marketing campaigns to reach
                    over 1m active users on all our platforms combined.{' '}
                  </div>
                </div>
                {/* <div className="platform-payment-image">
                <img src="img/scale.svg" className="img-platform-payment" alt="platform payment"/>
              </div> */}
              </div>
            </div>
          )}

          {/* Tabs */}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
