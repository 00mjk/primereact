import React from 'react';

const SupportPage = () => {
    return (
        <div className="content-section">
            <img alt="PRO Support" src="https://primefaces.org/cdn/primereact/images/support/support-header.png" className="w-full block mb-5" style={{ borderRadius: '20px' }} />

            <div className="flex flex-column xl:flex-row mb-5 gap-5">
                <div className="card xl:w-3 m-0 relative overflow-hidden">
                    <i className="pi pi-github absolute text-200" style={{ bottom: '-50px', right: '-50px', fontSize: '200px', transform: 'rotateX(45deg) rotateY(0deg) rotateZ(-45deg)' }}></i>
                    <div className="text-2xl text-900 font-semibold mb-3 relative">Community Support</div>
                    <p className="m-0 line-height-3 relative text-lg text-800">
                        <a href="https://forum.primefaces.org/viewforum.php?f=57" className="text-primary hover:underline font-semibold">
                            Forum
                        </a>{' '}
                        and{' '}
                        <a href="https://discord.gg/gzKFYnpmCY" className="text-primary hover:underline font-semibold">
                            Discord
                        </a>{' '}
                        are where the community users gather to seek support, post topics and discuss the technology. GitHub issue tracker is the channel where community users can create tickets however PrimeTek does not guarantee a response time
                        although they are monitored and maintained by our staff. If you need to secure our response within 1 business day, you may consider PRO support instead.
                    </p>
                </div>
                <div className="card m-0 xl:w-9 text-white bg-cover" style={{ backgroundImage: `url(/images/support/card-pro.jpg)` }}>
                    <div className="text-2xl font-semibold mb-3">PRO Support</div>
                    <p className="m-0 line-height-3 text-lg">
                        With PRO support, it's easy to support, tune and add features to PrimeReact as if it were an in- house library. PRO is a term based commercial support service. With the exclusive services of PRO account, it is no longer needed
                        to post questions in community forum and issue reports to community issue tracker at GitHub. A JIRA account will be created to the customer by PrimeTek, this account can be shared between any number of users within your
                        organization.
                    </p>
                </div>
            </div>
            <div className="card mb-5">
                <div className="flex flex-wrap align-items-center justify-content-between gap-3">
                    <div>
                        <div className="text-2xl text-900 font-semibold mb-3">Enterprise Support</div>
                        <p className="m-0 line-height-3 mb-5 text-secondary text-lg text-800">1 Year Subscription</p>
                    </div>
                    <a
                        href="mailto:primereact@primetek.com.tr"
                        className="flex align-items-center justify-content-center border-1 bg-indigo-500 border-round block p-3 mb-4 hover:bg-indigo-600 transition-all transition-duration-300 text-white font-medium text-lg"
                    >
                        Get a Quote
                    </a>
                </div>
                <div className="flex flex-wrap -mt-3 gap-3 text-800">
                    <ul className="flex-auto list-none p-0 m-0 text-lg p-3">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Access to Private JIRA</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Response within 1 business day</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Unlimited Issue Tickets</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Conference Calls</span>
                        </li>
                    </ul>
                    <ul className="flex-auto list-none p-0 m-0 text-lg p-3">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">PrimeBlocks - Enterprise License</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Theme Designer - Extended License</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Figma UI Kit - Enterprise License</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">1 Premium Template - Extended License</span>
                        </li>
                    </ul>
                    <ul className="flex-auto list-none p-0 m-0 text-lg p-3">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Maintenance for Any Version</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Visual Theme Builder (Soon)</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">Figma to Theme Generator (Soon)</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle mr-3 text-green-500"></i>
                            <span className="line-height-3">PrimeIcons PRO - (Soon)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card mb-5">
                <div className="text-2xl text-900 font-semibold mb-3">Enhancement Credits</div>
                <p className="m-0 line-height-3 mb-5 text-secondary text-lg text-800">
                    New features and enhancement requests are not available in core services and provided via a credit based model instead named PrimeCredit. When you have a feature request, we offer an initial estimate in terms of credits and once
                    this estimate is confirmed by you then implementation will be delivered by our team within an estimated timeframe.
                </p>

                <div className="flex flex-column md:flex-row gap-5">
                    <div className="flex-1">
                        <div className="text-900 font-semibold mb-2 text-xl">New Components</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary text-lg text-800">Brand new components you need that are not already available in the existing UI suite.</p>
                    </div>
                    <div className="flex-1">
                        <div className="text-900  font-semibold mb-2 text-xl">New Features</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary text-lg text-800">Enhancements to the components you need such as new properties, events and templating.</p>
                    </div>
                    <div className="flex-1">
                        <div className="text-900  font-semibold mb-2 text-xl">UX Customization</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary text-lg text-800">Behavioral changes to the existing components.</p>
                    </div>
                </div>
            </div>

            <div className="card m-0">
                <div className="text-2xl text-900 font-semibold mb-5">Frequently Asked Questions</div>
                <div className="flex flex-wrap text-lg -ml-5 -mt-5">
                    <div className="w-full lg:w-4 p-5">
                        <div className="text-900 line-height-3 mb-2 font-medium">What is the duration of the service?</div>
                        <p className="mt-0 mb-5 p-0 line-height-3 text-800">Support service is for one year.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">How many JIRA accounts do we get?</div>
                        <p className="mt-0 mb-5 p-0 line-height-3 text-800">We provide one shared account per organization that any number of members in your organization can use it.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">What happens if we extend after 1 year and we have unused tickets?</div>
                        <p className="mt-0 p-0 line-height-3 text-800">Unused tickets expire and cannot be transferred to the new subscription.</p>
                    </div>
                    <div className="w-full lg:w-4 p-5">
                        <div className="text-900 line-height-3 mb-2 font-medium">When can we purchase PrimeCredits for feature development?</div>
                        <p className="mt-0 mb-5 p-0 line-height-3 text-800">PrimeCredits can be purchased anytime during an active subscription.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">Are all of our requests guaranteed to be implemented with PrimeCredits?</div>
                        <p className="mt-0 mb-5 p-0 line-height-3 text-800">No, PrimeTek does not guarantee the implementation so it is suggested to confirm with us before purchasing credits.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">Can we get PrimeCredits without PRO support?</div>
                        <p className="mt-0 p-0 line-height-3 text-800">No, feature development is exclusive to PRO members.</p>
                    </div>
                    <div className="w-full lg:w-4 p-5">
                        <div className="text-900 line-height-3 mb-2 font-medium">Is there a limit on developers in our organization who can use the service?</div>
                        <p className="mt-0 mb-5 p-0 line-height-3 text-800">PRO is per organization so there is no limit on the number of developers.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">What is not covered by PRO?</div>
                        <p className="mt-0 p-0 line-height-3 text-800">As PRO support focuses on the library, application consulting and code reviews are out of scope.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
