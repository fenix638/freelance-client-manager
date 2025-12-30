interface EmptyStateProps {
    title: string
    description?: string
    action?: React.ReactNode
}

export default function EmptyState({
                                       title,
                                       description,
                                       action
                                   }: EmptyStateProps) {
    return (
        <div className="text-center py-20 text-slate-500">
            <p className="text-lg font-medium">{title}</p>
            {description && (
                <p className="text-sm mt-1">{description}</p>
            )}
            {action && <div className="mt-4">{action}</div>}
        </div>
    )
}
