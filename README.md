# ng-nippo-generator

This application enables you to post a daily report to your slack channel and [esa](https://esa.io/) at the same time.

## Usage

### clone

```
$ git clone https://github.com/hxrxchang/ng-nippo-generator.git
$ cd ng-nippo-generator
$ yarn
```

### set credential.ts

```
$ touch credential.ts
```

in credential.ts, describe esa token, slack webhook url etc.

```
// credential.ts
import { Credentials } from 'src/app/domains/report-models';

export const credentials: Credentials = {
  esaToken: [your esa token],

  slackWebHookUrl: [your slack webook url],
  esaApiEndPoint: 'https://api.esa.io',
  esaTeamName: [your esa team name],
  esaAuthorName:  [your name],
};
```

about esa API, slack incoming webhook, please refer below.

- https://docs.esa.io/posts/102
- https://api.slack.com/incoming-webhooks

### start

```
$ yarn start
```

### CORS error

To resolve CORS error, please enable [this chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog).
