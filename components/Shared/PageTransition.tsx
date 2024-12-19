import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
	children: ReactNode;
	transitionDuration?: number;
}

const PageTransition = ({
	children,
	transitionDuration = 0.2,
}: PageTransitionProps) => {
	const pathname = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: transitionDuration }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
