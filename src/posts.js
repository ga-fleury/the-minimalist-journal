import _ from "lodash";
import all from "../posts/*.md";

export const posts = _.chain(all)
    .map(transform)
    .orderBy("date", "desc")
    .value();

export function findPost(permalink) {
    return _.find(posts, { permalink });
}

export function findByTag(tag) {
    return posts.filter((post) => post.tags.includes(tag));
}

function transform({ filename, metadata, html }) {
    const permalink = metadata.permalink || filename.replace(/.md$/, "");
    const date = new Date(metadata.date);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    const finalDate = `${da}-${mo}-${ye}`
    let tags = [];

    if (metadata.tags) {
        tags = metadata.tags.split(",").map((str) => str.trim());
    }
    console.log("working");
    return { ...metadata, filename, permalink, html, date, finalDate, tags };
}
