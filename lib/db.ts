import { join } from 'path';
import sqlite3 from 'better-sqlite3';
const dbOpts = { readonly: true };

const path = join(__dirname, '..', 'dist', 'chinook.sqlite');
export const db = sqlite3(path, dbOpts);
