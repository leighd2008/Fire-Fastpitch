const API_KEY = `${process.env.REACT_APP_API_KEY}`

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=${API_KEY}`

const Ch16UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const C15UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const G13UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const Y14UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const N12UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const W12UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const G11UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const A10UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const K16UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

const H8UURLS = {
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
};

export { Ch16UURLS, C15UURLS, G13UURLS, Y14UURLS, N12UURLS, W12UURLS, G11UURLS, A10UURLS, K16UURLS,  H8UURLS}