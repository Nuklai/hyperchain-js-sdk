// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

declare module "crypto-browserify" {
  import { Hash } from "crypto";

  export function createHash(algorithm: string): Hash;
  // Add any other functions you need from crypto-browserify
}
