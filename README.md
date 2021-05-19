# Vercel Case 21455

## Problem

The files in `vercel.json` for an api

## Context

A complex build script is used (for the sake of the sample simplified here).

## How to test

1. deploy

2. open the URL https://<domain>/api/invoices/412

3. an response with the folowing body is expected

```
{ "InvoiceId":412,"CustomerId":58,"InvoiceDate":"2013-12-22 00:00:00",
"BillingAddress":"12,Community Centre","BillingCity":"Delhi",
"BillingState":null,"BillingCountry":"India","BillingPostalCode":"110017",
"Total":1.99 }
```

## What's happening

### When deploying from vercel cli

Step 3 works as expected

_it seems to take the files in `dist/` from the local filesystem_.

### When deploying from GitHub

Step 3 results in an error

_files being build are not included_
