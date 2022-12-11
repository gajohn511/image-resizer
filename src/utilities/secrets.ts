import * as dotenv from "dotenv";

dotenv.config();

export const IMAGES_FOLDER = process.env.IMAGES_FOLDER || "";

if (!IMAGES_FOLDER) {
    console.error("No images folder exists. Set IMAGES_FOLDER environment variable.");
    process.exit(1);
}

export const LOG_FOLDER = process.env.LOG_FOLDER || "";
if (!LOG_FOLDER) {
    console.error("No log folder exists. Set the following environment variable, LOG_FOLDER");
    process.exit(1);
}

export const ACCESS_IMAGES_LOG = process.env.ACCESS_IMAGES_LOG || "";
if (!ACCESS_IMAGES_LOG) {
    console.error("No file exists. Set the following environment variable, ACCESS_IMAGES_LOG");
    process.exit(1);
}
