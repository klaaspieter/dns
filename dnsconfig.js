var DPS_GANDI = NewDnsProvider("gandi");
var REG_GANDI = NewRegistrar("gandi");

var SHARED_RECORDS = [
  A("@", "91.99.116.152"),
  A("www", "91.99.116.152"),

  AAAA("@", "2a01:4f8:c17:6baf::1"),
  AAAA("www", "2a01:4f8:c17:6baf::1"),

  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
];

D(
  "annema.me",
  REG_GANDI,
  DnsProvider(DPS_GANDI),
  DefaultTTL(300),
  SHARED_RECORDS,

  // Fastmail
  CNAME("fm1._domainkey", "fm1.annema.me.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.annema.me.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.annema.me.dkim.fmhosted.com."),
  TXT("_dmarc", "v=DMARC1; p=none;"),

  // Home Assistant
  CNAME("home", "goxsf792guxzyy0ugkgrinr29bqbcfcy.ui.nabu.casa."),
  CNAME(
    "_acme-challenge.home",
    "_acme-challenge.goxsf792guxzyy0ugkgrinr29bqbcfcy.ui.nabu.casa.",
  ),

  // Google
  TXT(
    "@",
    "google-site-verification=zOJ2arCCTrNjCpBGXDbMznOHpC0nQmoTaQX5fA8VG34",
  ),

  // haveibeenpwned.com
  TXT("@", "have-i-been-pwned-verification=477e35fb82ee40a7ee8bb53b27c36c94"),

  // keybase.io
  TXT(
    "_keybase",
    "keybase-site-verification=I4BAM8jh_KxWKiR5jirkwfaXKq6fzGIRfVw-EMe28wE",
  ),
);

D(
  "imme.nyc",
  REG_GANDI,
  DnsProvider(DPS_GANDI),
  DefaultTTL(300),
  SHARED_RECORDS,
  CNAME("fm1._domainkey", "fm1.imme.nyc.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.imme.nyc.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.imme.nyc.dkim.fmhosted.com."),
  TXT("_dmarc", "v=DMARC1; p=none;"),
);

D(
  "annema.nyc",
  REG_GANDI,
  DnsProvider(DPS_GANDI),
  DefaultTTL(300),
  SHARED_RECORDS,
  CNAME("fm1._domainkey", "fm1.annema.nyc.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.annema.nyc.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.annema.nyc.dkim.fmhosted.com."),
  TXT("_dmarc", "v=DMARC1; p=none;"),
);
