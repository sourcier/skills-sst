import { Resource } from "sst";
import { Example } from "@skills-sst/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
