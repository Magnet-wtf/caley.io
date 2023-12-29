"use client";
import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Gauge,
  Inbox as InboxIcon,
  Loader2,
  MessagesSquare,
  Newspaper,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { AccountSwitcher } from "./account-switcher";
import { Nav } from "./nav";
import { cn } from "@/utils";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useAtomValue } from "jotai";
import useSWR from "swr";
import { configAtom } from "@/utils/store";
import { ProfileDropdown } from "@/components/TopNav";
import { Inbox } from "@/components/mail/components/inbox";
import { Newsletters } from "@/components/mail/components/newsletters";
import { MailStats } from "@/components/mail/components/mail-stats";
import { th } from "date-fns/locale";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Mail({
  accounts,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const {
    data: threadsData,
    error: threadsError,
    isLoading: threadsLoading,
  } = useSWR("/api/google/threads", {
    keepPreviousData: true,
  });

  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [selectedTab, setSelectedTab] = React.useState("Inbox");

  const mail = useAtomValue(configAtom);

  const handleOnCollapse = () => {
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
      !isCollapsed,
    )}`;
    setIsCollapsed(!isCollapsed);
  };

  const returnTab = () => {
    switch (selectedTab) {
      case "Inbox":
        return (
          <Inbox
            data={threadsData}
            isLoading={threadsLoading}
            error={threadsError}
            defaultLayout={defaultLayout}
          />
        );
      case "Newsletters":
        return <Newsletters />;
      case "Analytics":
        return <MailStats />;
      case "Drafts":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Draft</div>
          </ResizablePanel>
        );
      case "Sent":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Sent</div>
          </ResizablePanel>
        );
      case "Junk":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Junk</div>
          </ResizablePanel>
        );
      case "Trash":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Trash</div>
          </ResizablePanel>
        );
      case "Archive":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Archive</div>
          </ResizablePanel>
        );
      case "Social":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Social</div>
          </ResizablePanel>
        );
      case "Updates":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Updates</div>
          </ResizablePanel>
        );
      case "Forums":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Forums</div>
          </ResizablePanel>
        );
      case "Shopping":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Shopping</div>
          </ResizablePanel>
        );
      case "Promotions":
        return (
          <ResizablePanel defaultSize={1095} className="h-screen">
            <div>Promotions</div>
          </ResizablePanel>
        );
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={handleOnCollapse}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2",
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <div className="flex h-[calc(100vh-52px)] flex-col justify-between">
            <div>
              <Nav
                isCollapsed={isCollapsed}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                links={[
                  {
                    title: "Inbox",
                    label: "128",
                    icon: InboxIcon,
                    variant: "default",
                  },
                  {
                    title: "Newsletters",
                    label: "12",
                    icon: Newspaper,
                    variant: "ghost",
                  },
                  {
                    title: "Analytics",
                    label: "",
                    icon: Gauge,
                    variant: "ghost",
                  },
                  {
                    title: "Drafts",
                    label: "9",
                    icon: File,
                    variant: "ghost",
                  },
                  {
                    title: "Sent",
                    label: "",
                    icon: Send,
                    variant: "ghost",
                  },
                  {
                    title: "Junk",
                    label: "23",
                    icon: ArchiveX,
                    variant: "ghost",
                  },
                  {
                    title: "Trash",
                    label: "",
                    icon: Trash2,
                    variant: "ghost",
                  },
                  {
                    title: "Archive",
                    label: "",
                    icon: Archive,
                    variant: "ghost",
                  },
                ]}
              />
              <Separator />
              <Nav
                isCollapsed={isCollapsed}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                links={[
                  {
                    title: "Social",
                    label: "972",
                    icon: Users2,
                    variant: "ghost",
                  },
                  {
                    title: "Updates",
                    label: "342",
                    icon: AlertCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Forums",
                    label: "128",
                    icon: MessagesSquare,
                    variant: "ghost",
                  },
                  {
                    title: "Shopping",
                    label: "8",
                    icon: ShoppingCart,
                    variant: "ghost",
                  },
                  {
                    title: "Promotions",
                    label: "21",
                    icon: Archive,
                    variant: "ghost",
                  },
                ]}
              />
            </div>
            <div className="p-4">
              <ProfileDropdown />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        {returnTab()}
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}

export function DataDisplayComponent({
  isLoading,
  error,
  data,
  renderContent,
}: {
  isLoading: boolean;
  error: any;
  data: any;
  renderContent: (data: any) => React.ReactNode;
}) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Error: {error.message}
      </div>
    );
  }

  if (!data || data.threads.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        No emails available
      </div>
    );
  }

  return renderContent(data);
}
