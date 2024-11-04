import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

export function AppSidebar(props: HTMLProps<HTMLDivElement>) {
	return (
		<Sidebar {...props} className={cn('bg-transparent', props.className)}>
			<SidebarHeader />
			<SidebarContent className="w-full">
				<SidebarGroup />
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
