import { exec } from "child_process";

/**
 * @param path path of the git repo
 * @param long whether to return the long (40char) hash or the short one (7char)
 */
export default function gitsha(path?: string, long?: boolean): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        try {
            exec(`git rev-parse ${ long ? '' : '--short' } HEAD`, { cwd: path }, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(stdout?.trim());
                }
            })
        } catch (e) {
            reject(e);
        }
    })
}
