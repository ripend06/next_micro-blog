import path from "path"; //pathをインポート
import fs from "fs"; //事前に用意されてるモジュール
import matter from "gray-matter"; //mdのメタデータを読み込みためのライブラリをインストール
import { remark } from "remark";
import html from "remark-html";

// process.cwd(), 今存在してるディレクトリ ＝　ルートディレクトリ
//posts　フォルダをpathとして指定
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostsData() {

    //const fetchData = await fetch("endpoint"); APIの場合の記述

    const fileNames = fs.readdirSync(postsDirectory); //postsDirectoryのファイルをオブジェクトの配列として返す
    const allPostsData = fileNames.map((fileName) => { //mao関数でひとつひとつ取り出す
        const id = fileName.replace(/\.md$/, ""); //ファイル名(id) //mdの拡張子のファイルを取り出す。　第二引数は空として取り除く

        //マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName); //map関数で一つ一つのファイルを名を取り出して、パスを変数に格納
        const fileContents = fs.readFileSync(fullPath, "utf8");//readFileSync関数で中身を見ることだできる。文字列として認識してほしいのでutf8指定

        const matterResult = matter(fileContents);

        //idとデータを返す
        return {
            id,
            ...matterResult.data,
        }
    });
    return allPostsData;
}


//getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory); //拡張子付きのファイル名
    return fileNames.map((fileName) => { //map関数で一つひとつ取り出す
        return {
            params: {
                id: fileName.replace(/\.md$/, ""), //idは[id].jsのファイル名と一致させる必要がある
            },
        };
    });
    /*　具体的に下記構造で返される
        [
            {
                params: {
                    id: "ssg-ssr"
                }
            }.
            {
                params: {
                    id: "next-react"
                }
            }
        ]
    */
}


//idに基づいてブログ投稿データを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);

    const blogContent = await remark()
    .use(html)
    .process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}