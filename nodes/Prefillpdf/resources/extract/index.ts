import type { INodeProperties } from 'n8n-workflow';
import { extractTextFromUrl } from './extract';

export const extractOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Extract Text From URL',
				value: 'extractTextFromUrl',
				action: 'Extract text from PDF URL',
				routing: {
					request: {
						method: 'POST',
						url: '/extract-text-from-url',
					},
				},
			},
		],
		default: 'extractTextFromUrl',
	},
];

export const extractFields = [...extractTextFromUrl];