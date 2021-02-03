import { exec } from "child_process";

export default function gitsha(path?: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        try {
            exec("git rev-parse HEAD", { cwd: path }, (err, stdout, stderr) => {
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
