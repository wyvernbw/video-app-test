import { HTMLProps, useMemo, useState } from 'react';
import { Button } from '../components/ui/button';
import { H1, P } from '../components/ui/typography';
import { Separator } from '../components/ui/separator';
import { twMerge } from 'tailwind-merge';
import { AppSidebar } from './app-sidebar';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { CustomMenubar } from './app-menubar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function App() {
	const [count, setCount] = useState(0);
	const cats = useMemo(() => '🐈'.repeat(Math.max(count, 0)), [count]);
	return (
		<SidebarProvider>
			<AppSidebar className="" />
			<SidebarInset className="bg-background/75">
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="#">
									Building Your Application
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Data Fetching</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
					</div>
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
