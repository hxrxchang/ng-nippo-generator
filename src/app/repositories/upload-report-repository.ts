import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { makeDatePath } from '../domains/report-domain';
import { esaApiEndPoint, teamName, authorName, tokens } from 'credential';

@Injectable({
  providedIn: 'root',
})
export class UploadReportRepository {
  constructor(private http: HttpClient) {}

  postToEsa(markdown: string): Observable<any> {
    const esaPostBody = {
      post: {
        name: authorName,
        body_md: markdown,
        category: `日報/${makeDatePath()}`,
        wip: false,
      },
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens.esaToken}`,
      }),
    };

    return this.http.post(`${esaApiEndPoint}/v1/teams/${teamName}/posts`, esaPostBody, httpOptions);
  }

  postToSlack(markdown: string): Observable<any> {
    const arrangedMarkdown = '```\n\n' + markdown + '\n\n```';
    return this.http.post(tokens.slackWebHookUrl, { text: arrangedMarkdown }, { responseType: 'text' });
  }
}
