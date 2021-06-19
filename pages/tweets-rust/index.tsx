import { TweetList, TweetAccount } from "../../components/list";

const RustTweets = ({ accounts }) => {
    return (
        <TweetList {...accounts} />
    )
}


export async function getStaticProps() {
    const res = await fetch("");
    const accounts: TweetAccount[] = await res.json();

    return {
        props: {
            accounts,
        },
        revalidate: 10,
    };
}

export default RustTweets;