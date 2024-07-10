import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Collapse, Table } from 'antd';
import React, { useState } from 'react';
import "../../style/main.css";

const { Panel } = Collapse;

const columns = [
    {
        title: 'Terms',
        dataIndex: 'Terms',
        key: 'Terms',
        width: "20%",
        render: (text: any) => <span>{text}</span>,
    },
    {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
        render: (text: any) => (
            <span
                dangerouslySetInnerHTML={{
                    __html: `<div class="privacy_spaces">${text}</div>`
                }}
            />
        ),
    },
];

const data = [
    {
        key: '1',
        Terms: 'Personal Data',
        Description: `
            <div class="description_content">
                <p class="privacy_spaces">Any Data relating to an identified natural person or Identifiable Natural Person. For example, Personal Data may include an individual’s name, age, home address, gender, income, blood type, marital status, education and employment information. Personal Data includes “any information” relating to an individual including, for example, expressions of opinion such as an employer’s appraisal or opinion of Staff.</p>
                <p class="privacy_spaces description_client_data">This includes reference to “Client data” included but is not limited to any information such as ID, identity information, domicile, address, corporate information, accounts, financial and facilities statements and transactions, financial, investment and credit products, trusts, funds, investment vehicles and transactions etc., which is disclosed and contemplates “personal data” which is considered any information that identifies a living individual.</p>
                <p class="privacy_spaces description_client_data">The DPA defines 'personal data' as data relating to a living individual who can be identified, including data such as:</p>
                <ul class="description_list privacy_spaces description_client_data">
                    <li>the living individual's location data or online identifier.</li>
                    <li>factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of the living individual.</li>
                    <li>an expression of opinion about the living individual.</li>
                    </ul>
                <div class="privacy_spaces description_client_data">any indications of the intentions of the data controller or any other person in respect of the living individual.</div>
            </div>
        `,
    },
    {
        key: '2',
        Terms: 'Sensitive Personal Data',
        Description: `
            <p class="privacy_spaces">Personal Data revealing or concerning (directly or indirectly) an individual’s racial or ethnic origin, political opinions, religious or philosophical beliefs, criminal record, trade‐union membership and health or sex life.
            NOTE: The DPA creates more restrictive rules for the processing of 'sensitive personal data', which includes personal data consisting of a data subject's racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, physical or mental health or condition, medical data, sex life or commission or alleged commission of an offence or related proceedings.</p>
        `,
    },
    {
        key: '3',
        Terms: 'Identifiable Natural Person',
        Description: `
            <p class="privacy_spaces">A natural person who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his biological, physical, biometric, physiological, mental, economic, cultural or social identity. </p>
        `,
    },
    {
        key: '4',
        Terms: 'Data Subject',
        Description: `
            <p class="privacy_spaces">A natural person to whom Personal Data relate. For example, where an organisation holds Personal Data about its Staff, the Staff are Data Subjects.
            The DPA states that a 'data subject' is an identified living individual or a living individual who can be identified directly or indirectly by means reasonably likely to be used by the data controller or by any other person. </p>
        `,
    },
    {
        key: '5',
        Terms: 'Data Controller',
        Description: `
            <p class="privacy_spaces">Any person (excluding a natural person acting in his capacity as a staff member) who alone or jointly with others determines the purposes and means of the Processing of Personal Data. DIH is the Data Controller with regards to the personal data it collects. </p>
        `,
    },
    {
        key: '6',
        Terms: 'Data Processor',
        Description: `
            <p class="privacy_spaces">Any person (excluding a natural person acting in his capacity as a staff member) who Processes Personal Data on behalf of a Data Controller. With regards to DIH, where applicable, it includes outsourced service providers, business partners, introducers, and group entities.</p>
        `,
    },
    {
        key: '7',
        Terms: 'Processing',
        Description: `
             <div class="description_content">
                <p class="privacy_spaces">Encompasses “managing records” which entails:</p>
                </p>
                <ul class="description_list privacy_spaces">
                    <li>Creating and capturing records to meet requirements for evidence of business activity.</li>
                    <li>Taking appropriate action to protect the authenticity, reliability, integrity and usability of records in their business context and requirements for their management change over time.</li>
                </ul>
                <p class="privacy_spaces description_client_data">The DPA states that Personal data may be processed by either a data controller or a data processor. The data controller is the decision maker, the person who 'alone or jointly with others determines the purposes, conditions and manner in which any personal data are, or are to be, processed'. The data processor 'processes personal data on behalf of a data controller'. The obligations under the DPA are imposed almost exclusively on the data controller.

            </div>
        `,
    },
    {
        key: '8',
        Terms: 'Recipient',
        Description: `
            <p class="privacy_spaces">Any person to whom Personal Data are disclosed, whether a Third Party or not, but does not include any person to whom disclosure is or may be made as a result of, or with a view to, a particular inquiry by or on behalf of that person made in the exercise of any power conferred by law.</p>
        `,
    },
    {
        key: '9',
        Terms: 'Third Party',
        Description: `
            <p class="privacy_spaces">Any person other than the Data Subject, the Data Controller, the Data Processor and the persons who, under the direct control of the Data Controller or the Data Processor, are authorised to Process the Personal Data.</p>
        `,
    },
];


const PrivacyLegal: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string[]>([]);

    const togglePanel = (panelKey: string) => {
        if (activeKey.includes(panelKey)) {
            setActiveKey(activeKey.filter(key => key !== panelKey));
        } else {
            setActiveKey([...activeKey, panelKey]);
        }
    };

    const genExtra = (panelKey: string) => {
        const isActive = activeKey.includes(panelKey);
        return isActive ? (
            <div className="extra_panel_icon" onClick={(event) => { event.stopPropagation(); togglePanel(panelKey); }}>
                <MinusOutlined />
            </div>
        ) : (
            <div className="extra_panel_icon" onClick={(event) => { event.stopPropagation(); togglePanel(panelKey); }}>
                <PlusOutlined />
            </div>
        );
    };

    const handleCollapseChange = (key: string | string[]) => {
        setActiveKey(Array.isArray(key) ? key : [key]);
    };
  

    return (
        <>
            <div className="privacy_statement"  >
                <p className="privacy_title"  >Data Privacy Statement</p>
                <div className="privacy_paragraph"  >
                    <p className="privacy_spaces">
                        <strong>Demeter Investment Holdings (“DIH”, “We”, “Our” or “Us”)</strong> is a Cayman Islands incorporated Special Purpose Vehicle founded in 2018 and is part of <strong>The Entrepreneur’s Investment Office Group (“EIO”).</strong> Its core purpose, through the issuance of bonds and similar instruments, is to assist institutions and qualified investors (UHNWI/HNWI) in developing unique investment structures to help them achieve specific financial objectives.
                    </p>
                    <p className="privacy_spaces">
                        DIH respects an individual’s privacy and complies with the applicable data protection laws of various jurisdictions. We issue this Data Privacy Statement in light of the <strong>Data Protection Act (2021 revision) (“DPA”)</strong> Cayman Islands law, which first came into force on 30 September 2019, and the <strong>EU General Data Protection Regulation (“GDPR”).</strong> This Data Privacy Statement (“the <strong>Statement</strong>”) sets out how DIH as a data controller, will collect and use personal data.
                    </p>
                    <p className="privacy_spaces">
                        Any reference to <strong>“You”</strong> or <strong>“Your”</strong> in this Statement is meant to include:
                        <p>(a) a natural person who may be a client, a prospective client, supplier, business partner, introducer; or</p>
                        <p>(b) a natural person who may be a director, officer, staff, shareholder or beneficial owner of a prospective client, a client, supplier, business partner or introducer (“connected individual”).</p>
                    </p>
                    <strong>We should be grateful if You would make the notice available to anyone, whose data We may obtain in the context of our relationship with You or Your organisation.</strong>
                </div>
            </div>

            <Collapse activeKey={activeKey} onChange={handleCollapseChange} bordered={false} expandIcon={() => null} className="collapse"  >
                <Panel
                    header={<div className="panel_title">1. Applicability</div>}
                    key="1"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()} className="extra_icons">{genExtra('1')}</div>}
                >
                    <p className="privacy_spaces">This Statement is relevant and applicable to natural persons and connected individuals of whom We collect personal data. The Statement sets out Our practices when using personal data in the context of business relationships with a prospective client, a client, supplier, business partner or introducer to whom DIH provides, or from whom DIH receives any product or service, and/or with whom DIH enters into any transaction.</p>
                </Panel>

                <Panel
                    header={<div className="panel_title">2. Key Terms Explained</div>}
                    key="2"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('2')}</div>}
                >
                    <div className="privacy_key_table">
                        <Table
                            columns={columns}
                            rowKey="key"
                            dataSource={data}
                            size="large"
                            scroll={{ x: 0 }}
                            bordered
                        />
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">3. Who is responsible for handling of Your personal data?</div>}
                    key="3"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('3')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">
                            Under the DPA, such role lies with the “data controller”, namely:

                        </p>
                        <p className="privacy_spaces">

                            If You wish to exercise Your individual rights, or to raise any questions, concerns, or complaints concerning this Statement or Our
                            data protection practices, You can contact Us at <a href=""> operations@demeterinvestment.com </a>We are required to handle (or “process”) personal
                            data securely and in accordance with applicable data protection laws.
                        </p>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">4. What personal data might We hold about You and where do We source such data?</div>}
                    key="4"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('4')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">We will only hold data about You that is relevant in the context of the business relationship which We have with You or with
                            entities where you may be regarded as “connected individual”. Most of this information We will obtain directly from You. We may also obtain personal data from a range of other sources, which may include prospective client, a client, supplier, business
                            partner or introducer of which You are regarded as connected individual (by virtue of beneficial owner, shareholder, director,
                            authorized signatory, staff), publicly available sources (e.g. the press, registers of companies or assets, internet Websites,
                            including social media platforms like LinkedIn) and from providers of business-risk screening services, such as credit reference
                            agencies, anti-fraud databases, WorldCheck, sanctions lists and databases of news articles.</p>
                        <div >
                            <p className="privacy_spaces">The types of personal data that We process may include (but are not limited to):</p>
                            <div >
                                <h4 className="privacy_under_title">Contact information</h4>
                                <p className="privacy_spaces">
                                    Name, address, telephone, e-mail address and other contact information We use to communicate.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">KYC</h4>
                                <p className="privacy_spaces">
                                    (“Know Your Customer”) records, such as passport, visa, emirates ID details, any national ID number, date and
                                    place of birth, nationality, citizenship, marital status, dependants, information to determine whether the individual
                                    is a Politically Exposed Person (PEP), or has a criminal record or any adverse media, etc.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Financial information </h4>
                                <p className="privacy_spaces">
                                    With regards to source of wealth, source of funds including past employment and
                                    qualifications, income, pension, investments, assets, liabilities, creditworthiness, bank account details, specimen
                                    signature, investment objectives, knowledge of financial products and services, risk appetite, tax status, domicile,
                                    etc.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Communications information </h4>
                                <p className="privacy_spaces">
                                    includes communications by e-mail, recordings of telephone calls and
                                    conference calls (includes MS Teams, Zoom, WebEx, etc.) and/or post in the course of Our interactions with
                                    You.
                                </p>
                            </div>
                        </div>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">5. What will We use Your personal data for and on what legal basis?</div>}
                    key="5"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('5')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">DIH processes Your personal data for various purposes in accordance with the provisions of the DPA, and where
                            applicable, the European GDPR. DIH only uses such personal data where DIH has a lawful basis for using it. The lawful
                            basis and purposes include processing:
                        </p>
                        <div >
                            <div >
                                <h4 className="privacy_under_title">For the performance of a contract / transaction</h4>
                                <p className="privacy_spaces">
                                    In order to provide advisory and financial services as per the terms of the contract / transaction or potential contract /
                                    transaction with You, or to take steps prior to entering into a contract.
                                </p>
                                <p className="privacy_spaces">
                                    The purposes of data processing are primarily dependent on the specific services provided by DIH: e.g. advisory,
                                    arranging custody, advising and arranging on credit facilities, etc. and can include needs assessments.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">For compliance with the applicable law</h4>
                                <p className="privacy_spaces">
                                    DIH is not a regulated firm. However, DIH is subject to statutory legislation that may require Us to collect, store or
                                    disclose personal data, such as for anti-money laundering purposes or to respond to investigations or disclosure orders
                                    from the police, regulators, and tax or other public authorities.
                                </p>
                                <p className="privacy_spaces">
                                    For limited purposes, such as in the case of undertaking AML, KYC and PEP checks and related actions, it may be
                                    necessary to process sensitive personal data such as criminal conviction or adverse media records. In these
                                    circumstances, We will process personal data only when there is a legal basis We can rely on under applicable legislation.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">For the purposes of legitimate interests </h4>
                                <p className="privacy_spaces">
                                    Where necessary, We process Your personal data to serve Our legitimate interests or those of a third party to whom
                                    the Personal Data has been made available. A legitimate interest will apply in so far as such interests are not outweighed
                                    by Your legitimate interests. The legitimate interests to process Your personal data include (but are not limited to):
                                </p>
                                <ul className="description_list privacy_spaces">
                                    <li>Know-your-customer and creditworthiness checks.</li>
                                    <li>Credit assessment in order to determine whether to onboard You.</li>
                                    <li>Business analysis and development of products and services.</li>
                                    <li>Activities relating to information security.</li>
                                    <li>Managing the risks and optimising the efficiency of DIH.</li>
                                    <li>Recording of telephone lines and monitoring of electronic communications for business and compliance purposes.</li>
                                    <li>Prevention and detection of fraud and financial crime.</li>
                                    <li>Evaluating, bringing or defending legal claims.</li>
                                    <li>Marketing of DIH products /services (unless You have objected/unsubscribed).</li>
                                    <li>Audits.</li>
                                </ul>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">On the basis of Your consent </h4>
                                <p className="privacy_spaces">
                                    If We wish to process Your personal data in a way not covered by the legal justifications above, We will need Your
                                    consent. Where You give consent, You are entitled to withdraw it at any time. Note that withdrawing Your consent does
                                    not render Our prior handling of Your personal data unlawful and that it might have an impact on Our ability to continue
                                    to provide Our services in the same way in future, as illustrated below.
                                </p>
                                <p className="privacy_spaces">
                                    There are some categories of personal data which the law deems so sensitive that We generally need an individual’s
                                    consent to be able to store and use it. If You voluntarily provide Us with such information in circumstances where this
                                    could be relevant to the financial products and services We offer You (as could be the case for appropriate investment
                                    planning or Islamic financing) or for broader relationship management purposes, We will take it that this constitutes
                                    Your consent to use this information as appropriate. You could withdraw that consent but it may hamper Our ability to
                                    ensure You receive the most suitable advice for Your circumstances.
                                </p>
                            </div>
                        </div>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">6. Who We share personal data about You with?</div>}
                    key="6"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('6')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">
                            Where necessary to fulfil Your instructions to Us and for the other purposes outlined above, We may share information
                            about You with a range of recipients including (but not limited to) the following:
                        </p>
                        <ul className="description_list privacy_spaces">
                            <li>Our affiliated Group companies for the purposes as set out in this Statement.</li>
                            <li>Credit reference and other third-party agencies / suppliers in order to carry out AML/KYC/PEP and
                                creditworthiness checks and comply with the applicable law.</li>
                            <li>Third parties who have introduced customers, suppliers or agents to Us, such as financial service providers, in order
                                to process the data for the purposes as set out in this Statement.</li>
                            <li>Third parties who work on Our behalf or for the customer to service or maintain customer accounts, such as
                                business partners.</li>
                            <li>Third parties who provide technical services, such as suppliers of IT systems, which We use to process that
                                personal data.</li>
                            <li>Third parties providing services to Us such as Our professional advisers (e.g. auditors and lawyers.</li>
                            <li>Competent authorities such as tax authorities, courts, regulators and other government agencies, security or police
                                authorities where required or requested by law, or where We consider it necessary (to the extent permitted by
                                law).</li>
                            <li>Subject to applicable laws, in the event that DIH is merged, sold, or in the event of a transfer of some or all of Our
                                assets (including in bankruptcy), or in the event of another corporate change, in connection with such transaction.</li>
                        </ul>
                        <p className="privacy_spaces">We will only disclose information about You as permitted under applicable legislation.</p>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">7. How long do We store personal data for?</div>}
                    key="7"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('7')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">We will retain Your personal data for as long as required to fulfil the purposes for which the data was collected,
                            depending on the legal basis on which that data was obtained and/or whether additional legal/regulatory obligations
                            mandate that We retain the personal data. In general terms, this will mean that personal data will be kept for the
                            duration of Our relationship with You as well as beyond our relationship to comply with the record keeping
                            requirements under the applicable law.
                        </p>
                        <p className="privacy_spaces">If the personal data is no longer required in order to fulfil contractual or statutory obligations, they are regularly deleted,
                            unless their further processing generally for a limited time is required for the following purposes.
                        </p>
                        <div >

                            <div >

                                <ul className="description_list privacy_spaces">
                                    <li>Compliance with records retention periods under applicable under all applicable legislation.</li>
                                    <li>Preservation of evidence in accordance with statutes of limitations.</li>
                                    <li>aslong as it is necessary for You to be able to bring a claim against Us and for Usto be able to defend Ourselves
                                        against any legal claims. This will generally be the length of the relationship, the length of any applicable
                                        statutory limitation period under applicable law.</li>

                                </ul>
                            </div>

                            <p className="privacy_spaces">
                                In certain circumstances, personal data may need to be retained for a longer period of time, for example, where We are
                                in ongoing correspondence or there is a continuing claim or investigation.
                            </p>

                        </div>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">8. What are Your rights in relation to the personal data? </div>}
                    key="8"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('8')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">You will have certain rights in relation to Your personal data. Some of these rights will only apply in certain
                            circumstances. If You would like to exercise, or discuss, any of these rights, You should submit a request to <a href="">operations@demeterinvestments.com</a>
                            and provide sufficientinformation to allow Us to understand the scope of the
                            request.</p>
                        <div >
                            <div >
                                <h4 className="privacy_under_title">Access</h4>
                                <p className="privacy_spaces">
                                    You are entitled to ask Us whether We are processing Your personal data and, if We are, You can request access to Your
                                    personal data. This enables You to receive a copy of the personal data We hold about You and certain other information
                                    aboutit.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Withdraw Consent</h4>
                                <p className="privacy_spaces">
                                    If Our processing is based on consent, You can withdraw Your consent at any time by contacting
                                    <a href="">operations@demeterinvestments.com</a> This willnot affectthe lawfulness of processing based on consent before such
                                    withdrawal.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Correction</h4>
                                <p className="privacy_spaces">
                                    You are entitled to request that any incomplete or inaccurate personal data We hold about You be corrected.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Erasure</h4>
                                <p className="privacy_spaces">
                                    You are entitled to ask Us to delete or remove personal data in certain circumstances. There are also certain exceptions
                                    where We may refuse a request for erasure, for example, where the personal data is required for compliance with the
                                    applicable law, or in connection with claims.

                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Objection</h4>
                                <p className="privacy_spaces">
                                    Where We are processing personal data based on legitimate interests(or those of a third party), an individual may
                                    challenge this. However, We may be entitled to continue processing personal data based on Our compelling
                                    legitimate interests or where this is relevant to legal claims. You also have the right to object where We are
                                    processing personal data for direct marketing purposes.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Restriction</h4>
                                <p className="privacy_spaces">
                                    You are entitled to ask Us to restrict the processing of Your personal data, for example if You want to establish its
                                    accuracy or the reason for processing it.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Portability</h4>
                                <p className="privacy_spaces">
                                    Meaning that You have the right to receive Personal Data that You have provided to Us in a structured, commonly used
                                    and machine-readable. You also have the right to direct Us to transfer this data to any other person where technically
                                    feasible.
                                </p>
                            </div>
                            <div >
                                <h4 className="privacy_under_title">Right to lodge a complaint </h4>
                                <p className="privacy_spaces">
                                    You have the right tolodge a complaint with the Office of the Ombudsman of the Cayman Islands; contact details as follows:
                                    <p>Office of the Ombudsman,</p>
                                    <p>PO Box 2252,</p>
                                    <p>Grand Cayman KY1-1107,</p>
                                    <p>CAYMAN ISLANDS,</p>
                                    <p>Email: info@ombudsman.ky</p>
                                    <p>and also, where applicable, with a supervisory authority in the Member State in the European Union
                                        where You are habitually resident, where You work or where an alleged infringement of the applicable
                                        data protection legislation has taken place.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">9. Marketing communications</div>}
                    key="9"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('9')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">We may use Your personal data to give You information about products and services offered by Us or Our affiliates that
                            We think You may be interested in receiving. Where We consider it appropriate, and so far as compliant with marketing
                            laws, We may contact You in this regard by email or telephone. You can opt out of, or object to receiving marketing by
                            contacting  <a href="">operations@demeterinvestments.com</a> </p>
                        <p className="privacy_spaces">Additionally, We will ensure that any outside companies assisting Us in marketing Our products and services, or with
                            whom We have marketing agreements, are under contractual obligations to protect the confidentiality of personal data,
                            and to use it only to provide the services We have asked them to perform.</p>
                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">10. Are You under an obligation to provide Us with Your personal data?</div>}
                    key="10"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('10')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">You are not required by law to provide Us with Your personal data. However, if You refuse to do so We may not be able
                            to conduct further business with You. For example, in order to satisfy Our anti-money laundering obligations, We have
                            to verify the identity of Our clients. This inevitably requires Us to collect certain personal data from current and
                            prospective clients.</p>

                    </div>
                </Panel>

                <Panel
                    header={<div className="panel_title">11. Amendment to this Statement</div>}
                    key="11"
                    className="privacy_panel"
                    extra={<div onClick={(e) => e.stopPropagation()}>{genExtra('11')}</div>}
                >
                    <div >
                        <p className="privacy_spaces">This Statementmay be amended by DIH from time to time. Amendmentsshall take effect on the date specified in the
                            relevant Statement. </p>

                    </div>
                </Panel>
            </Collapse>
        </>
    );
};

export default PrivacyLegal;
