import type { INodeProperties } from 'n8n-workflow';

export const extractTextFromUrl: INodeProperties[] = [
	{
		displayName: 'File URL',
		name: 'file_url',
		type: 'string',
		required: true,
		default: '',
		description: 'Public URL of the PDF',
		routing: {
			request: {
				qs: {
					file_url: '={{$value}}',
				},
			},
		},
	},
	{
		displayName: 'Inline',
		name: 'inline',
		type: 'boolean',
		default: true,
		description: 'Whether to return the extracted text inline',
		routing: {
			request: {
				qs: {
					inline: '={{$value}}',
				},
			},
		},
	},
];