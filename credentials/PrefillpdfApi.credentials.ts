import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PrefillpdfApi implements ICredentialType {
	name = 'prefillpdfApi';

	displayName = 'PrefillPDF API';

	icon = 'file:prefillpdf.svg' as const;

	documentationUrl = 'https://prefillpdf.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.prefillpdf.com',
			url: '/extract-text-from-url',
			method: 'POST',
			qs: {
				file_url: 'https://www.prefillpdf.com/example.pdf',
				inline: true,
			},
		},
	};
}