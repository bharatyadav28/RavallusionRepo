"use client"
import { useVerifyCertificateQuery } from '@/store/Api/course';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'
import { SimpleLoader } from './common/LoadingSpinner';
import { AlertCircle } from 'lucide-react';

const VerifyCertificate = () => {

    const path = usePathname();
    const pathArray = path.split("/")
    const id = pathArray[pathArray.length - 1]

    const { data, isLoading } = useVerifyCertificateQuery(id);

    const pdfUrl = data?.data?.certificate;
    return (
        <div className='h-screen w-screen flex items-center justify-center p-6'>
            {isLoading ? <SimpleLoader /> :
                <div className='h-auto w-full md:w-1/2 border-[8px] border-[var(--neon-purple)] rounded-lg flex items-center justify-center p-2'>
                    {pdfUrl ? (
                            <iframe
                                src={pdfUrl}
                                title="Certificate PDF"
                                className="w-full min-h-60 md:min-h-[540px] rounded-lg border-0"    
                            />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-4 bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl shadow-md w-96">
                            <AlertCircle size={54} />
                            <div className="text-center">
                                <h2 className="text-xl font-semibold mb-1">Oops! Certificate Not Found</h2>
                                <p className="text-base">
                                    We couldnt load the certificate PDF. <br />
                                    Please check the link or try again later.
                                </p>
                            </div>
                        </div>

                    )}
                </div>
            }
        </div>
    )
}

export default VerifyCertificate;