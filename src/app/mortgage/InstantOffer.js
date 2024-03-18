"use client"
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import styles from './InstantOffer.module.scss';
import ArrowButton from '@/components/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const InstantOffer = ({}) => {
 const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>How it works: HomeEasy Mortgage</div>

                    <div className={`${styles['main-copy-title']}`}>We offer up to $10,000<sub>1</sub> towards closing costs, making us your wallet’s new BFF.</div>

                    <div className={`${styles['main-copy-copy']}`}>See just how low our rates really are. Get instant access to our low rates. Lock in. Save thousands. Get home, easy.</div>

                    <div className={`${styles['main-copy-copy']}`}>Same day pre-approval. Ready to buy a home in today’s market? Speed is key, and we offer same-day pre-approvals for eligible buyers.</div>

                    <div className={`${styles['main-copy-copy']}`}>We’ve got up to 10,000 reasons to work with us. Get 1.50% of your financed loan up to $10,000 towards your closing costs1.</div>
                  

                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button> */}
                    <div className={`${styles['main-copy-footer']}`} >
                        <ArrowButton
                            link_text="Calculate my savings"
                            // callback={()=>{
                            //     // router.push(`/get_started?flow=sell&step=0&branch=9`);
                            //     gtmPush(["callback", "sell_list_one", ()=>{router.push(`/get_started?flow=sell&step=0&branch=9`);}]);
                            // }}
                            
                        />
                    </div>

                </div>
                {size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/mortage_offer.png" alt="instantoffer" />
                </div>
                }
                {/* {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1280.webp" alt="instantoffer" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1024.webp" alt="instantoffer" />
                </div>
                } */}
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance.webp" alt="instantoffer" />
                </div>
                }
                    {/* <!-- The Modal --> */}

            </div>
        </div>
    );
};

export default InstantOffer;