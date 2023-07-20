# Prevent Hotlinking

This document will describe how to prevent hotlinking of assets on a website. This is a common practice to prevent people from stealing assets and using them on their own website. Hotlinking also uses up bandwidth and can cause your website to slow down.

## Amazon S3

The bucket policy below will prevent hotlinking on all requests not associated with the website domains. This policy will also prevent direct downloads of the assets. This is a good practice to prevent people from downloading the assets and using them on their own website.

```json
{
  "Version": "2012-10-17",
  "Id": "PolicyForPreventHotlinking",
  "Statement": [
    {
          "Sid"      : "PreventHotlinking",
          "Effect"   : "Deny",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource" : "arn:aws:s3:::mattmccarty.net/*",
          "Condition": {
          "StringNotLike": {
            "aws:Referer": [
              "https://mattmccarty.net/*",
              "https://www.mattmccarty.net/*",
              "https://mattmccartyllc.net/*",
              "https://www.mattmccartyllc.net/*",
              "http://mattmccarty.net/*",
              "http://www.mattmccarty.net/*",
              "http://mattmccartyllc.net/*",
              "http://www.mattmccartyllc.net/*"
            ]
        }
      }
    }
  ]
}
```

One can also implement the bucket policy with an `Allow`.

```json
{
  "Version": "2012-10-17",
  "Id": "PolicyForPreventHotlinking",
  "Statement": [
    {
      "Sid": "PreventHotlinking",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mattmccarty.net/*",
      "Condition": {
        "StringLike": {
          "aws:Referer": [
              "https://mattmccarty.net/*",
              "https://www.mattmccarty.net/*",
              "https://mattmccartyllc.net/*",
              "https://www.mattmccartyllc.net/*",
              "http://mattmccarty.net/*",
              "http://www.mattmccarty.net/*",
              "http://mattmccartyllc.net/*",
              "http://www.mattmccartyllc.net/*"
          ]
        }
      }
    }
  ]
}
```