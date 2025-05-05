import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'MQTT',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                MQTT is a lightweight messaging protocol, ideal for real-time communication in IoT networks.
            </>
        ),
    },
    {
        title: 'OPC UA',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                OPC UA is an industrial communication standard that ensures secure and reliable interoperability between different systems and devices.
            </>
        ),
    },
    {
        title: 'IBM MQ',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                IBM MQ is an enterprise messaging solution that facilitates the integration of applications and systems through secure and efficient message exchange.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
