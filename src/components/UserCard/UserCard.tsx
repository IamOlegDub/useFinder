import { UserStat } from "components/UserStat";
import styles from "./UserCard.module.scss";
import { LocalGithubUser } from "types";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
    <div className={styles.userCard}>
        <UserTitle
            created={props.created}
            login={props.login}
            name={props.name}
        />
        <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
            {props.bio || ""}
        </p>

        <UserStat
            followers={props.followers}
            repos={props.repos}
            following={props.following}
        />
        <UserInfo
            blog={props.blog}
            company={props.company}
            location={props.location}
            twitter={props.twitter}
        />
        <img src={props.avatar} alt={props.login} className={styles.avatar} />
    </div>
);
