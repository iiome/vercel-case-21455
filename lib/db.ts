import { resolve } from 'path';
import sqlite3 from 'better-sqlite3';
const dbOpts = { readonly: true };
export const db = sqlite3(resolve(__dirname, '../dist/chinook.sqlite'), dbOpts);
