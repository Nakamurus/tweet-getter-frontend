import Link from 'next/link'
export type TweetAccount = {
    name: string,
}

export const TweetList: React.FC<TweetAccount[]> = (accounts) => {
    return (
        <ul>
            {accounts.map((account) => {
                <li>
                    <Link href="">
                        {account.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}