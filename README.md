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
