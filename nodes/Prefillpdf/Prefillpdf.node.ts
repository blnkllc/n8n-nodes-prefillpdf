import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { extractFields, extractOperations } from './resources/extract';

export class Prefillpdf implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PrefillPDF',
		name: 'prefillpdf',
		icon: {
			light: 'file:prefillpdf.svg',
			dark: 'file:prefillpdf.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Extract text from PDFs with the PrefillPDF API',
		defaults: {
			name: 'PrefillPDF',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'prefillpdfApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.prefillpdf.com',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [...extractOperations, ...extractFields],
	};
}