import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
    const Router = useRouter();
    function submitHandler(e){
        e.preventDefault()
        console.log(e.target.address.value , e.target.chainId.value )
        if(window.umami){
            window.umami.storeWallet(e.target.address.value , e.target.chainId.value)
        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <script async defer 
                data-website-id = "63e3406a08756d9131644d57" 
                src="https://ayeanalytics.frontend.fair.dental/aye-analytics.js" 
                data-host-url="https://ayeanalytics.backend.fair.dental" 
                data-chat-url="https://ayeanalytics.frontend.fair.dental" 
                data-chat-enabled='true' >
                </script>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
                <div style={{margin: "24px"}}>
                    <span style={{ border: "2px solid black", padding: "6px 4px", margin: "4px", borderRadius: "10px", cursor: "pointer", userSelect: "none" }} onClick={()=>{Router.push("/demo-page")}}>Demo Page</span>
                    <span style={{ border: "2px solid black", padding: "6px 4px", margin: "4px", borderRadius: "10px", cursor: "pointer", userSelect: "none" }} onClick={()=>{Router.push("/demo-second")}}>Demo Second</span>
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <input style={{width: "500px" , padding: '4px'}} type="text" name='address' placeholder='Enter Wallet Address' required/>
                    <input style={{width: "500px" , padding: '4px'}} type="text" name='chainId' placeholder='Enter Chain Id (1,56,137)' required/>
                    <button type='submit' >Submit</button>
                </form>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
