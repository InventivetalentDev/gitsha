import { exec } from "child_process";

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
